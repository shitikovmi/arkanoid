class Paddle extends MovingElement {

    constructor(
        protected dx: number,
        protected dy: number,
        protected speed: number,
        protected x: number,
        protected y: number,
        protected width: number,
        protected height: number,
        protected color: string,
    ) {
        super(dx, dy, speed, x, y, width, height, color);
    }

    moveRight() {
        this.dx = 3;
    }

    stopMoving() {
        this.dx = 0;
    }

    moveLeft() {
        this.dx = -3;
    }

    moving() {
        this.x += this.dx;
    }

    onWallCollision() {
        if (this.x <= container.minX + container.wallSize) {
            this.x = container.minX + container.wallSize;
        } else if (this.x + this.width >= container.maxX) {
            this.x = container.maxX - this.width;
        }
    }

    render() {
        canvas.createPaddle(this.x, this.y, this.width, this.height, this.color);
    }
}

const paddle = new Paddle(0,
                            0,
                            3,
                            canvas.width / 2 - 30 / 2,
                            canvas.height - 100,
                            30,
                            10,
                            '#FFF');
