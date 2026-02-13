import { Vector2D } from './Vector'
import Draw from './Draw'

export default class Particle {
  position: Vector2D
  velocity: Vector2D
  acceleration: Vector2D
  size: number
  color: string

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

      const velocity = new Vector2D(
        (Math.random() - 0.5) * 0.1,
        (Math.random() - 0.5) * 0.1,
      )

      const acceleration = new Vector2D(0, 0)

      const size = 20
      const color = '#F9F6EE'

      particles.push(
        new Particle(position, velocity, acceleration, size, color),
      )
    }

    return particles
  }

	static updateAll(particles: Array<Particle>, deltaTime: number) {
		particles.forEach((particle) => particle.update(deltaTime))
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

  update(deltaTime: number) {
    // Update velocity based on acceleration
    this.velocity = this.velocity.add(this.acceleration.scale(deltaTime))
    // Update position based on velocity
    this.position = this.position.add(this.velocity.scale(deltaTime))
  }

  render(ctx: CanvasRenderingContext2D) {
    const draw = new Draw(ctx)
    draw.circle(this.position.x, this.position.y, this.size, this.color)
  }
}
