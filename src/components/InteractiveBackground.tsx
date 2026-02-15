import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import Draw from '../helpers/Draw'
import { ParticleSystem } from '../helpers/ParticleSystem'
import QuadTree from '../helpers/QuadTree'
import { Vector2D } from '../helpers/Vector'

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
  const particleSystem = useRef<ParticleSystem>(
    new ParticleSystem({
      x: 0,
      y: 0,
      width: 0,
      height: 0,
    }),
	)
  const animating = useRef<boolean>(false)

  // Animation loop
  let lastTime: number
  const animate = (timestamp: number) => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const draw = new Draw(ctx)

    if (particleSystem.current.particles.length === 0) return
    animating.current = true

    if (!lastTime) lastTime = timestamp
    const deltaTime = timestamp - lastTime
    lastTime = timestamp

    // Clear and draw the background
    draw.clear()
    draw.background(0, 0, dimensions.width, dimensions.height, '#343434')

    // Handle particle system
    const quadTree = new QuadTree(0, 0, dimensions.width, dimensions.height)
    particleSystem.current.particles.forEach((particle) =>
      quadTree.insert(particle),
    )
    const mousePositionVector = new Vector2D(
      currMousePosition.current.x,
      currMousePosition.current.y,
    )
    particleSystem.current.update(
      10,
      10,
      0,
      20,
      100,
      0.98,
      mousePositionVector,
      quadTree,
      deltaTime,
    )
		particleSystem.current.setDraw(draw)
		particleSystem.current.render()

    window.requestAnimationFrame(animate)
  }

  // Particle creation and animation handler
  useEffect(() => {
    // If dimensions aren't bigger than 0, they haven't been set yet
    if (dimensions.width === 0 && dimensions.height === 0) return

		// Update particle system bounds
		particleSystem.current.setBounds({
			x: 0,
			y: 0,
			width: dimensions.width,
			height: dimensions.height,
		})

    // If particles don't already exist, make them
    if (particleSystem.current.particles.length === 0) {
      particleSystem.current.generate(300, 10, 'White')
    }

    // If we aren't already animating, start that
    if (!animating.current) {
			animating.current = true
			window.requestAnimationFrame(animate)
		}
  }, [dimensions])

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10"
    />
  )
}
