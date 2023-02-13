class Ball extends MovingElement{

    constructor(
        protected dx: number,
        protected dy: number,
        protected speed: number,
        protected x: number,
        protected y: number,
        protected width: number,
        protected height: number,
        protected color: string,
        protected radius: number,
        protected diameter: number,
    ) {
        super(dx, dy, speed, x, y, width, height, color);
        this.width = radius * 2;
        this.height = radius * 2;
        this.diameter = radius * 2;
    }

    changeDirectionY() {
        this.dy *= -1;
    }

    changeDirectionX() {
        this.dx *= -1;
    }

    pushFromPaddle() {
        this.y = paddle.getY - this.diameter;
    }

    collision() {
        if (this.x < container.wallSize) {
            this.x = container.wallSize;
            this.changeDirectionX();
        } else if (this.x > canvas.width - container.wallSize) {
            this.x = canvas.width - container.wallSize;
            this.changeDirectionX();
        } else if (this.y < container.wallSize) {
            this.y = container.wallSize;
            this.changeDirectionY();
        } else if (this.y > canvas.height) {
            characteristics.decLives();
            this.init();
        }
    }

    moving() {
        this.x += this.dx;
        this.y += this.dy;
    }

    init() {
        this.y = canvas.height - 100;
        this.x = canvas.width / 2 - this.diameter / 2;
        this.dx = - this.speed;
        this.dy = - this.speed;
    }

    render() {
        canvas.createBall(this.x, this.y, this.radius, this.color);
    }
}

const ball = new Ball(0, 0, 3, 0, 0, 10, 10, '#FFF', 10, 5);