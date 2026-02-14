import { Vector2D } from './Vector'
import Draw from './Draw'
import type QuadTree from './QuadTree'

export default class Particle {
  position: Vector2D
  velocity: Vector2D
  acceleration: Vector2D
  size: number
  color: string

  static lookDistance = 5
  static friction = 0.98
  static separationDistanceFromOthers = 20
  static separationDistanceFromMouse = 100
  static distanceFromWall = 10

  static generateRandom(
    count: number,
    width: number,
    height: number,
  ): Array<Particle> {
    const particles: Array<Particle> = []
    for (let i = 0; i < count; i++) {
      const position = new Vector2D(
        Math.random() * width,
        Math.random() * height,
      )

      const velocity = new Vector2D(Math.random() - 0.5, Math.random() - 0.5)

      const acceleration = new Vector2D(0, 0)

      const size = 10
      const color = '#F9F6EE'

      particles.push(
        new Particle(position, velocity, acceleration, size, color),
      )
    }

    return particles
  }

  static updateAll(
    particles: Array<Particle>,
    quadTree: QuadTree,
    mousePosition: { x: number; y: number },
    deltaTime: number,
  ) {
    particles.forEach((particle) => {
      const bounds = {
        x: particle.position.x - Particle.lookDistance,
        y: particle.position.y - Particle.lookDistance,
        width: particle.position.x + Particle.lookDistance,
        height: particle.position.y + Particle.lookDistance,
      }

      const neighbors = quadTree.findInArea(
        bounds.x,
        bounds.y,
        bounds.width,
        bounds.height,
      )
      particle.updateVelocity(deltaTime, neighbors, quadTree, mousePosition)
    })

    particles.forEach((particle) => {
      particle.updatePosition(deltaTime)
    })
  }

  static renderAll(particles: Array<Particle>, ctx: CanvasRenderingContext2D) {
    particles.forEach((particle) => particle.render(ctx))
  }

  constructor(
    position: Vector2D,
    velocity: Vector2D,
    acceleration: Vector2D,
    size: number,
    color: string,
  ) {
    this.position = position
    this.velocity = velocity
    this.acceleration = acceleration
    this.size = size
    this.color = color
  }

  updateVelocity(
    deltaTime: number,
    neighbors: Array<Particle>,
    quadTree: QuadTree,
    mousePosition: { x: number; y: number },
  ) {
    // Update acceleration based on neighbors
    let separationVelocity = new Vector2D(0, 0)
    for (const neighbor of neighbors) {
      const distance = Math.sqrt(
        (neighbor.position.x - this.position.x) ** 2 +
          (neighbor.position.y - this.position.y) ** 2,
      )
      if (distance <= Particle.separationDistanceFromOthers && distance !== 0) {
        const directionVector = this.position
          .subtract(neighbor.position)
          .normalize()
        const weightedVelocity = directionVector.divide(
          new Vector2D(distance, distance),
        )
        separationVelocity = separationVelocity.add(weightedVelocity)
      }
    }

    if (neighbors.length > 1) {
      separationVelocity = separationVelocity
        .divide(new Vector2D(neighbors.length - 1, neighbors.length - 1))
        .scale(1)
    }

    // Move away from mouse
    const mouseVector = new Vector2D(mousePosition.x, mousePosition.y)
    const distance = Math.sqrt(
      (mouseVector.x - this.position.x) ** 2 +
        (mouseVector.y - this.position.y) ** 2,
    )
    if (distance <= Particle.separationDistanceFromMouse && distance !== 0) {
      const directionVector = this.position.subtract(mouseVector).normalize()
      const weightedVelocity = directionVector.divide(
        new Vector2D(distance, distance),
      )
      separationVelocity = separationVelocity.add(weightedVelocity)
    }

    this.acceleration = this.acceleration.add(separationVelocity)

    // Update acceleration based on walls
    const dFromTop = this.position.y - this.size / 2 - quadTree.root.y
    const dFromBottom = quadTree.root.height - (this.position.y + this.size / 2)
    const dFromLeft = this.position.x - this.size / 2 - quadTree.root.x
    const dFromRight = quadTree.root.width - (this.position.x + this.size / 2)
    const wallMargin = Particle.distanceFromWall
    if (dFromTop <= wallMargin) {
    	const directionVector = new Vector2D(0, 1)
    	const forceVector = directionVector.scale(1 / dFromTop)
    	this.acceleration = this.acceleration.add(forceVector)
    }

    if (dFromBottom <= wallMargin) {
    	const directionVector = new Vector2D(0, -1)
    	const forceVector = directionVector.scale(1 / dFromBottom)
    	this.acceleration = this.acceleration.add(forceVector)
    }

    if (dFromLeft <= wallMargin) {
    	const directionVector = new Vector2D(1, 0)
    	const forceVector = directionVector.scale(1 / dFromLeft)
    	this.acceleration = this.acceleration.add(forceVector)
    }

    if (dFromRight <= wallMargin) {
    	const directionVector = new Vector2D(-1, 0)
    	const forceVector = directionVector.scale(1 / dFromRight)
    	this.acceleration = this.acceleration.add(forceVector)
    }

    if (dFromTop <= 0) {
      if (dFromTop < 0) {
        this.position.y = this.size / 2
      }

      this.velocity = new Vector2D(this.velocity.x, -this.velocity.y)
    }

    if (dFromBottom <= 0) {
      if (dFromBottom < 0) {
        this.position.y = quadTree.root.height - this.size / 2
      }

      this.velocity = new Vector2D(this.velocity.x, -this.velocity.y)
    }

    if (dFromLeft <= 0) {
      if (dFromLeft < 0) {
        this.position.x = this.size / 2
      }

      this.velocity = new Vector2D(-this.velocity.x, this.velocity.y)
    }

    if (dFromRight <= 0) {
      if (dFromRight < 0) {
        this.position.x = quadTree.root.width - this.size / 2
      }

      this.velocity = new Vector2D(-this.velocity.x, this.velocity.y)
    }

    // Update velocity based on acceleration
    this.velocity = this.velocity
      .add(this.acceleration.scale(deltaTime))
      .capTo(0.5)

    // Add friction
    this.velocity = this.velocity.scale(Particle.friction)

    // Reset acceleration
    this.acceleration = this.acceleration.scale(0)
  }

  updatePosition(deltaTime: number) {
    // Update position based on velocity
    this.position = this.position.add(this.velocity.scale(deltaTime))
  }

  render(ctx: CanvasRenderingContext2D) {
    const draw = new Draw(ctx)
    draw.circle(this.position.x, this.position.y, this.size, this.color)
    // const normalizedVelocity = this.velocity.normalize().scale(20)
    // draw.line(this.position.x, this.position.y, this.position.x + normalizedVelocity.x, this.position.y + normalizedVelocity.y, "white")
  }
}
