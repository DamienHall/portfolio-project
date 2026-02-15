export class Vector2D {
	static zeroedVector = new Vector2D(0, 0)

  x: number
  y: number

  constructor(x: number, y: number) {
    this.x = x
    this.y = y
  }

  add(guest: Vector2D): Vector2D {
    return new Vector2D(this.x + guest.x, this.y + guest.y)
  }

  subtract(guest: Vector2D): Vector2D {
    return new Vector2D(this.x - guest.x, this.y - guest.y)
  }

	divide(guest: Vector2D): Vector2D {
		return new Vector2D(this.x / guest.x, this.y / guest.y)
	}

  scale(factor: number): Vector2D {
    return new Vector2D(this.x * factor, this.y * factor)
  }

  magnitude(): number {
    return Math.sqrt(this.x ** 2 + this.y ** 2)
  }

  normalize(): Vector2D {
    const mag = this.magnitude()
    if (mag === 0) return new Vector2D(0, 0)
    return new Vector2D(this.x / mag, this.y / mag)
  }

  direction(): number {
    return Math.atan2(this.y, this.x)
  }

  capTo(value: number): Vector2D {
		const xSign = Math.sign(this.x)
		const ySign = Math.sign(this.y)
		return new Vector2D(
			Math.min(value, Math.abs(this.x)) * xSign,
			Math.min(value, Math.abs(this.y)) * ySign,
		)
	}
}
