import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import Draw from '../helpers/Draw'
import Particle from '../helpers/Particle'
import QuadTree from '../helpers/QuadTree'

export default function InteractiveBackground() {
	const canvasRef = useRef<HTMLCanvasElement>(null)

	// useState so that we can re-render canvas to correct size when we change browser size
	const [dimensions, setDimensions] = useState<{
		width: number
		height: number
	}>({ width: 0, height: 0 })

	// Window resize handling
	const resize = () => {
		setDimensions({
			width: window.innerWidth,
			height: window.innerHeight,
		})

		const canvas = canvasRef.current
		if (!canvas) return

		// Set drawing buffer size (Actual res)
		const dpr = window.devicePixelRatio || 1
		canvas.width = window.innerWidth * dpr
		canvas.height = window.innerHeight * dpr

		// Set CSS display size
		canvas.style.width = `${window.innerWidth}px`
		canvas.style.height = `${window.innerHeight}px`

		// Scale the context to match the DPI
		const ctx = canvas.getContext('2d')
		if (!ctx) return
		ctx.scale(dpr, dpr)
	}

	// Setup resize event handling (Runs once)
	useLayoutEffect(() => {
		// Set initial size
		resize()

    // Add resize event listener
    window.addEventListener('resize', resize)

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener('resize', resize)
    }
	}, [])

	// Mouse data
	const lastMousePosition = useRef<{
		x: number
		y: number
	}>({ x: 0, y: 0 })
	const currMousePosition = useRef<{
		x: number
		y: number
	}>({ x: 0, y: 0 })

	// Handle mouse move event
	const handleMouseMove = (event: MouseEvent) => {
		const canvas = canvasRef.current
		if (!canvas) return

		const clientBounds = canvas.getBoundingClientRect()
		const x = event.clientX - clientBounds.left
		const y = event.clientY - clientBounds.top

		const ctx = canvas.getContext('2d')
		if (!ctx) return

		lastMousePosition.current = currMousePosition.current
		currMousePosition.current = { x, y }
	}

	// Create mouse move event listener
  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

	// Particle system data
	const particles = useRef<Array<Particle>>([])
	const animating = useRef<boolean>(false)

	// Animation loop
	let lastTime: number
	const animate = (timestamp: number) => {
		const canvas = canvasRef.current
		if (!canvas) return

		const ctx = canvas.getContext('2d')
		if (!ctx) return

		const draw = new Draw(ctx)

		if (particles.current.length === 0) return
		animating.current = true

		if (!lastTime) lastTime = timestamp
		const deltaTime = timestamp - lastTime
		lastTime = timestamp

		// Clear and draw the background
		draw.clear()
		draw.background(0, 0, dimensions.width, dimensions.height, '#343434')

		// Handle particle system
		const quadTree = new QuadTree(0, 0, dimensions.width, dimensions.height)
		particles.current.forEach((particle) => quadTree.insert(particle))
		Particle.updateAll(particles.current, quadTree, currMousePosition.current, deltaTime)
		Particle.renderAll(particles.current, ctx)

		window.requestAnimationFrame(animate)
	}

	// Particle creation and animation handler
	useEffect(() => {
		// If dimensions aren't bigger than 0, they haven't been set yet
		if (dimensions.width === 0 && dimensions.height === 0) return

		// If particles don't already exist, make them
		if (particles.current.length === 0) {
			particles.current = Particle.generateRandom(300, dimensions.width, dimensions.height)
		}

		// If we aren't already animating, start that
		if (!animating.current) animating.current = true
		window.requestAnimationFrame(animate)
	}, [dimensions])

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10"
    />
  )
}
