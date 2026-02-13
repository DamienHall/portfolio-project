export default class Draw {
  ctx: CanvasRenderingContext2D

  constructor(ctx: CanvasRenderingContext2D) {
    this.ctx = ctx
  }

  circle(x: number, y: number, diameter: number, color: string) {
    this.ctx.fillStyle = color
    this.ctx.beginPath()
    this.ctx.arc(x, y, diameter / 2, 0, 2 * Math.PI)
    this.ctx.fill()
  }

	rectangle(x: number, y: number, width: number, height: number, color: string) {
		this.ctx.strokeStyle = color
		// this.ctx.fillRect(x, y, width, height)
		this.ctx.rect(x, y, width, height)
		this.ctx.stroke()
	}

	line(x1: number, y1: number, x2: number, y2: number, color: string) {
		this.ctx.strokeStyle = color
		this.ctx.beginPath()
		this.ctx.moveTo(x1, y1)
		this.ctx.lineTo(x2, y2)
		this.ctx.stroke()
	}

	background(x: number, y: number, width: number, height: number, color: string) {
		this.ctx.fillStyle = color
		this.ctx.fillRect(x, y, width, height)
	}

	clear() {
		this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height)
	}
}
