import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import Draw from '../helpers/Draw'
import Particle from '../helpers/Particle'
import QuadTree from '../helpers/QuadTree'

export default function InteractiveBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [dimensions, setDimensions] = useState<{
    width: number
    height: number
  }>({ width: 0, height: 0 })
  const [particles, setParticles] = useState<Array<Particle>>([])
  const [animating, setAnimating] = useState<boolean>(false)
	const mousePosition = useRef<{ x: number; y: number }>({ x: 0, y: 0 })

  // Animation Loop
  let lastTime: number
  const animate = (timestamp: number) => {
    if (particles.length === 0) return
    setAnimating(true)

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return
    const draw = new Draw(ctx)

    if (!lastTime) lastTime = timestamp
    const deltaTime = timestamp - lastTime
    lastTime = timestamp

    Particle.updateAll(particles, deltaTime)
    draw.clear()
    draw.background(0, 0, dimensions.width, dimensions.height, '#343434')

		const quadTree = new QuadTree(0, 0, dimensions.width, dimensions.height)
		particles.forEach((particle) => quadTree.insert(particle))
		// quadTree.render(ctx)
    Particle.renderAll(particles, ctx)
		quadTree.findInArea(mousePosition.current.x - 100, mousePosition.current.y - 100, 200, 200).forEach((particle) => {
			draw.circle(particle.position.x, particle.position.y, particle.size, 'red')
		})
		// draw.rectangle(mousePosition.current.x - 100, mousePosition.current.y - 100, 200, 200, 'rgba(255, 0, 0, 0.5)')

    window.requestAnimationFrame(animate)
  }

  const resize = () => {
    const canvas = canvasRef.current
    if (!canvas) return

    const dpr = window.devicePixelRatio || 1

    // Set drawing buffer size (actual resolution)
    canvas.width = window.innerWidth * dpr
    canvas.height = window.innerHeight * dpr

    // Set the CSS display size
    canvas.style.width = `${window.innerWidth}px`
    canvas.style.height = `${window.innerHeight}px`

    // Scale the context to match the high DPI
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    ctx.scale(dpr, dpr)

    // Update state to trigger re-render
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    })
  }

  useLayoutEffect(() => {
    resize() // Set the initial size

    // Add resize event listener
    window.addEventListener('resize', resize)

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener('resize', resize)
    }
  }, [])

  useEffect(() => {
    if (particles.length === 0 && dimensions.width > 0 && dimensions.height > 0) {
      setParticles(
        Particle.generateRandom(100, dimensions.width, dimensions.height),
      )
    }

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const draw = new Draw(ctx)
    // Clear the canvas
    draw.clear()

    // Draw code goes here use CSS pixel dimensions for draw calls
    // This is only drawn when the dimensions state changes (i.e., on resize)
    draw.background(0, 0, dimensions.width, dimensions.height, '#343434')
    draw.circle(dimensions.width / 2, dimensions.height / 2, 80, '#F9F6EE')
    Particle.renderAll(particles, ctx)
  }, [dimensions, particles])

  useEffect(() => {
    if (particles.length !== 0 && !animating) {
      console.log('STARTING ANIMATION')
      console.log(animating)
      window.requestAnimationFrame(animate)
    }
  }, [particles, animating])

  const handleMouseMove = (event: MouseEvent) => {
    const canvas = canvasRef.current
    if (!canvas) return

    const rect = canvas.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top

    const ctx = canvas.getContext('2d')
    if (!ctx) return

		mousePosition.current = { x, y }
  }

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10"
    />
  )
}
