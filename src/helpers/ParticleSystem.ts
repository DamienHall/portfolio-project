import { Vector2D } from './Vector'
import type Draw from './Draw'
import type QuadTree from './QuadTree'

export class Particle {
  position: Vector2D
  velocity: Vector2D
  acceleration: Vector2D
  size: number
  color: string

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

  setPosition(x: number, y: number) {
    this.position = new Vector2D(x, y)
  }

  setVelocity(x: number, y: number) {
    this.velocity = new Vector2D(x, y)
  }

  setAcceleration(x: number, y: number) {
    this.acceleration = new Vector2D(x, y)
  }

  getDirection() {
    return this.velocity.direction()
  }
}

export class ParticleSystem {
  bounds: {
    x: number
    y: number
    width: number
    height: number
  }
  draw: Draw | null
  particles: Array<Particle>
	htmlElements: Array<Element>

  constructor(
    bounds: {
      x: number
      y: number
      width: number
      height: number
    },
  ) {
    this.bounds = bounds
    this.draw = null
    this.particles = []
		this.htmlElements = []
  }

	setDraw(draw: Draw) {
		this.draw = draw
	}

	setElements(elements: Array<Element>) {
		this.htmlElements = elements
	}

  setBounds(bounds: { x: number; y: number; width: number; height: number }) {
    this.bounds = bounds
  }

  generate(particleCount: number, size: number, color: string) {
    for (let i = 0; i <= particleCount; i++) {
      // Create a random position within the bounds
      const position = new Vector2D(
        this.bounds.x + Math.random() * (this.bounds.width - this.bounds.x),
        this.bounds.y + Math.random() * (this.bounds.height - this.bounds.y),
      )

      // Handle random colors if wanted
      if (color === 'random') {
        color = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`
      }

      // Add the particles to the array
      this.particles.push(
        new Particle(
          position,
          Vector2D.zeroedVector,
          Vector2D.zeroedVector,
          size,
          color,
        ),
      )
    }
  }

  update(
    neighborSearchDistance: number,
    minDistanceFromBounds: number,
    minDistanceFromElements: number,
    minDistanceFromNeighbors: number,
    minDistanceFromMouse: number,
    friction: number,
		mousePosition: Vector2D,
    quadTree: QuadTree,
    deltaTime: number,
  ) {
    // Update all velocities
    this.particles.forEach((particle) => {
      // Get neighbors
      const searchArea = {
        x: particle.position.x - neighborSearchDistance,
        y: particle.position.y - neighborSearchDistance,
        width: particle.position.x + neighborSearchDistance,
        height: particle.position.y + neighborSearchDistance,
      }
      const neighbors = quadTree.findInArea(
        searchArea.x,
        searchArea.y,
        searchArea.width,
        searchArea.height,
      )

      // Create neighbor separation velocity
      let neighborSeparationVelocity = Vector2D.zeroedVector
      neighbors.forEach((neighbor) => {
        const distance = Math.sqrt(
          (neighbor.position.x - particle.position.x) ** 2 +
            (neighbor.position.y - particle.position.y) ** 2,
        )

        if (distance <= minDistanceFromNeighbors && distance !== 0) {
          const directionVector = particle.position
            .subtract(neighbor.position)
            .normalize()
          const weightedVelocity = directionVector.divide(
            new Vector2D(distance, distance),
          )
          neighborSeparationVelocity =
            neighborSeparationVelocity.add(weightedVelocity)
        }
      })

      if (neighbors.length > 1) {
        neighborSeparationVelocity = neighborSeparationVelocity
          .divide(new Vector2D(neighbors.length - 1, neighbors.length - 1))
          .scale(1)
      }

      // Create mouse separation velocity
			let mouseSeparationVelocity = Vector2D.zeroedVector
			const distance = Math.sqrt(
				(mousePosition.x - particle.position.x) ** 2 +
					(mousePosition.y - particle.position.y) ** 2
			)

			if (distance <= minDistanceFromMouse && distance !== 0) {
				const directionVector = particle.position
					.subtract(mousePosition)
					.normalize()
				const weightedVelocity = directionVector.divide(
					new Vector2D(distance, distance)
				)
				mouseSeparationVelocity =
					mouseSeparationVelocity.add(weightedVelocity)
			}

			// Create element separation velocity
			let elementSeparationVelocity = Vector2D.zeroedVector
			this.htmlElements.forEach((element) => {
				if (element.tagName.toLowerCase() === 'canvas') return
				const bounds = element.getBoundingClientRect()
				const dFromTop = Math.abs(particle.position.y - particle.size / 2 - bounds.top)
				const dFromBottom = Math.abs((bounds.top + bounds.height) - (particle.position.y + particle.size / 2))
				const dFromLeft = Math.abs(particle.position.x - particle.size / 2 - bounds.left)
				const dFromRight = Math.abs((bounds.width + bounds.left) - (particle.position.x + particle.size / 2))
				const wallBounce = 0.2
				
				// If we are in between the left and right boundaries
				if (particle.position.x >= bounds.left && particle.position.x <= bounds.left + bounds.width) {
					if (dFromTop <= minDistanceFromBounds) {
						if (dFromTop < 0) {
							particle.position.y = particle.size / 2
						}

						const directionVector = new Vector2D(0, -1)
						elementSeparationVelocity = elementSeparationVelocity.add(directionVector.scale(wallBounce))
					}

					if (dFromBottom <= minDistanceFromBounds) {
						if (dFromTop < 0) {
							particle.position.y = bounds.height - particle.size / 2
						}

						const directionVector = new Vector2D(0, 1)
						elementSeparationVelocity = elementSeparationVelocity.add(directionVector.scale(wallBounce))
					}
				}

				// If we are in betwen the top and bottom boundaries
				if (particle.position.y >= bounds.top && particle.position.y <= bounds.top + bounds.height) {
					if (dFromLeft <= minDistanceFromBounds) {
						if (dFromTop < 0) {
							particle.position.x = particle.size / 2
						}

						const directionVector = new Vector2D(-1, 0)
						elementSeparationVelocity = elementSeparationVelocity.add(directionVector.scale(wallBounce))
					}

					if (dFromRight <= minDistanceFromBounds) {
						if (dFromTop < 0) {
							particle.position.x = bounds.width - particle.size / 2
						}

						const directionVector = new Vector2D(1, 0)
						elementSeparationVelocity = elementSeparationVelocity.add(directionVector.scale(wallBounce))
					}
				}
			})

			// Create boundary separation velocity
			const dFromTop = particle.position.y - particle.size / 2 - this.bounds.y
			const dFromBottom = this.bounds.height - (particle.position.y + particle.size / 2)
			const dFromLeft = particle.position.x - particle.size / 2 - this.bounds.x
			const dFromRight = this.bounds.width - (particle.position.x + particle.size / 2)
			const wallBounce = 0.2
			let boundarySeparationVelocity = Vector2D.zeroedVector

			if (dFromTop <= minDistanceFromBounds) {
				if (dFromTop < 0) {
					particle.position.y = particle.size / 2
				}

				const directionVector = new Vector2D(0, 1)
				boundarySeparationVelocity = boundarySeparationVelocity.add(directionVector.scale(wallBounce))
			}

			if (dFromBottom <= minDistanceFromBounds) {
				if (dFromTop < 0) {
					particle.position.y = this.bounds.height - particle.size / 2
				}

				const directionVector = new Vector2D(0, -1)
				boundarySeparationVelocity = boundarySeparationVelocity.add(directionVector.scale(wallBounce))
			}

			if (dFromLeft <= minDistanceFromBounds) {
				if (dFromTop < 0) {
					particle.position.x = particle.size / 2
				}

				const directionVector = new Vector2D(1, 0)
				boundarySeparationVelocity = boundarySeparationVelocity.add(directionVector.scale(wallBounce))
			}

			if (dFromRight <= minDistanceFromBounds) {
				if (dFromTop < 0) {
					particle.position.x = this.bounds.width - particle.size / 2
				}

				const directionVector = new Vector2D(-1, 0)
				boundarySeparationVelocity = boundarySeparationVelocity.add(directionVector.scale(wallBounce))
			}

			// Add all separation velocities to the acceleration
			particle.acceleration = particle.acceleration.add(neighborSeparationVelocity)
			particle.acceleration = particle.acceleration.add(mouseSeparationVelocity)
			particle.acceleration = particle.acceleration.add(elementSeparationVelocity)
			particle.acceleration = particle.acceleration.add(boundarySeparationVelocity)

			// Update velocity by acceleration
			particle.velocity = particle.velocity.add(particle.acceleration.scale(deltaTime)).capTo(10)

			// Add friction
			particle.velocity = particle.velocity.scale(friction)

			// Reset acceleration
			particle.acceleration = particle.acceleration.scale(0)
    })

    // Update all positions
    this.particles.forEach((particle) => {
      particle.position = particle.position.add(particle.velocity)
    })
  }

  render() {
    this.particles.forEach((particle) => {
			if (!this.draw) return
      const position = particle.position
      const size = particle.size
      const color = particle.color
      this.draw.circle(position.x, position.y, size, color)
    })
  }
}
