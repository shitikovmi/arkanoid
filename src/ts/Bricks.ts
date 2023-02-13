

class Bricks extends BaseElement {

    constructor(
        protected gap: number,
        protected x: number,
        protected y: number,
        protected width: number,
        protected height: number,
        protected color: string,
        protected matrix: never[] | string[][][],
        protected bricks: [BaseElement] | []
    ) {
        super(x, y, width, height, color);
    }

    fillBricksArray() {
        for (let row = 0; row < this.matrix.length; row ++) {
            for (let col = 0; col < this.matrix[row]!.length; col++) {
                const cell = this.matrix[row]![col];
                if (cell!.length !== 0) {
                    const x = container.wallSize + (this.width + this.gap) * col;
                    const y = container.wallSize + (this.height + this.gap) * row;
                    const brick = new BaseElement(x,
                        y,
                        this.width,
                        this.height,
                        this.color,)
                        // @ts-ignore
                    this.bricks.push(brick);
                }
            }
        }
    }

    onLevelEnd() {
        if (!this.bricks) {
            characteristics.setDefeatStatus();
        }
    }

    collisionWithBall() {

        this.bricks.forEach((brick, i )=> {

            const ballObject = {
                x: ball.getX,
                y: ball.getY,
                width: ball.getWidth,
                height: ball.getHeight,
            }

            const brickObject = {
                x: brick.getX,
                y: brick.getY,
                width: brick.getWidth,
                height: brick.getHeight,
            }

            if (canvas.detectCollision(brickObject, ballObject)) {

                characteristics.incScore();

                this.bricks.splice(i, 1);

                if (ball.getY + ball.getWidth - ball.getSpeed <= brick.getY ||
                    ball.getY >= brick.getY + brick.getHeight - ball.getSpeed) {
                    ball.changeDirectionY();
                } else {
                    ball.changeDirectionX();
                }
            }
        })
    }
    render() {
        this.bricks.forEach((brick) => {
            canvas.createShadowRect(brick.getX, brick.getY, brick.getWidth, brick.getHeight, 1, this.color)
        })
    }
}

const bricks = new Bricks(5, 0, 0, 25, 10, '#fff', [[[], ['D'], ['D'], ['D'], [], [], [], [], [], ['D'], ['D'], ['D'], []],
    [['D'], [], ['D'], [], ['D'], [], [], [], ['D'], [], ['D'], [], ['D']],
    [['D'], ['D'], [], ['D'], ['D'], ['D'], ['D'], ['D'], ['D'], ['D'], [], ['D'], ['D']],
    [['D'], [], ['D'], [], ['D'], [], [], [], ['D'], [], ['D'], [], ['D']],
    [[], ['D'], ['D'], ['D'], [], [], [], [], [], ['D'], ['D'], ['D'], []]], []);