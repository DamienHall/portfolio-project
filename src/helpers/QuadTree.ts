import Draw from './Draw'
import type Particle from './Particle'

class Quad {
	x: number
	y: number
	width: number
	height: number
	particles: Array<Particle>
	particleLimit: number
	tree: Array<Quad>

	constructor(
		x: number,
		y: number,
		width: number,
		height: number,
	) {
		this.x = x
		this.y = y
		this.width = width
		this.height = height
		this.particles = []
		this.particleLimit = 4
		this.tree = []
	}

	insert(particle: Particle): boolean {
		// particle is out of bounds
		if (!this.inQuad(particle)) {
			return false
		}

		// particle is in bounds, but there are already sub-quads, try to insert into them
		if (this.tree.length > 0) {
			for (const quad of this.tree) {
				if (quad.insert(particle)) {
					return true
				}
			}
		}

		// particle is in bounds, insert it
		if (this.particles.length >= this.particleLimit) {
			// Create new quadrants and redistribute particles
			this.particles.push(particle)
			this.subdivide()
		} else {
			// Add particle to this quadrant
			this.particles.push(particle)
		}

		return true
	}

	subdivide() {
		const halfWidth = this.width / 2
		const halfHeight = this.height / 2
		// Create four new quadrants, top left, right, then bottom left, right
		this.tree.push(new Quad(this.x, this.y, halfWidth, halfHeight))
		this.tree.push(new Quad(this.x + halfWidth, this.y, halfWidth, halfHeight))
		this.tree.push(new Quad(this.x, this.y + halfHeight, halfWidth, halfHeight))
		this.tree.push(new Quad(this.x + halfWidth, this.y + halfHeight, halfWidth, halfHeight))

		// Redistribute particles into the new quadrants
		this.particles.forEach((particle) => {
			this.tree.forEach((quad) => {
				if (quad.insert(particle)) {
					return
				}
			})
		})

		// Clear particles from this quadrant since they are now in the tree
		this.particles = []
	}

	inQuad(particle: Particle): boolean {
		const px = particle.position.x
		const py = particle.position.y
		if (px >= this.x && px < this.x + this.width && py >= this.y && py < this.y + this.height) {
			return true
		}

		return false
	}

	intersects(x: number, y: number, width: number, height: number): boolean {
		// Check if this quadrant intersects with the given area
		// First check if this quad is completely inside the area
		if (this.x >= x && this.x + this.width <= x + width && this.y >= y && this.y + this.height <= y + height) {
			return true
		}

		// Check if quad is partially inside the area
		if (
			((this.x >= x && this.x <= x + width) ||
			(this.x + this.width >= x && this.x + this.width <= x + width)) &&
			((this.y >= y && this.y <= y + height) ||
			(this.y + this.height >= y && this.y + this.height <= y + height))
		) {
			return true
		}

		// Check if this quad contains any of the corners of the insideArea
		const bTopLeft = { position: { x, y } } as Particle
		const bTopRight = { position: { x: x + width, y } } as Particle
		const bBottomLeft = { position: { x, y: y + height } } as Particle
		const bBottomRight = { position: { x: x + width, y: y + height } } as Particle
		if (this.inQuad(bTopLeft) || this.inQuad(bTopRight) || this.inQuad(bBottomLeft) || this.inQuad(bBottomRight)) {
			return true
		}

		return false
	}

	render(draw: Draw) {
		if (this.tree.length === 4) {
			draw.line(this.x + this.width / 2, this.y, this.x + this.width / 2, this.y + this.height, '#555')
			draw.line(this.x, this.y + this.height / 2, this.x + this.width, this.y + this.height / 2, '#555')
		}
		this.tree.forEach((quad) => quad.render(draw))
	}
}

export default class QuadTree {
	root: Quad

	constructor(x: number, y: number, width: number, height: number) {
		this.root = new Quad(x, y, width, height)
	}

	insert(particle: Particle) {
		this.root.insert(particle)
	}

	findInArea(x: number, y: number, width: number, height: number): Array<Particle> {
		if (this.root.intersects(x, y, width, height)) {
			if (this.root.tree.length > 0) {
				return this.recursiveFindInArea(this.root.tree, x, y, width, height)
			} else {
				return this.root.particles
			}
		}

		return []
	}

	recursiveFindInArea(tree: Array<Quad>, x: number, y: number, width: number, height: number): Array<Particle> {
		const found: Array<Particle> = []
		for (const quad of tree) {
			// Check if this quad intersects with the area
			if (quad.intersects(x, y, width, height)) {
				// If there are particles in this quad, add them to the found list
				if (quad.particles.length > 0) {
					found.push(...quad.particles)
				}

				// If there are sub-quads, check them as well
				if (quad.tree.length > 0) {
					found.push(...this.recursiveFindInArea(quad.tree, x, y, width, height))
				}
			}
		}

		return found
	}

	render(ctx: CanvasRenderingContext2D) {
		const draw = new Draw(ctx)
		this.root.render(draw)
	}
}
