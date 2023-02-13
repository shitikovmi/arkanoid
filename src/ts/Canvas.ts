class Canvas {

    private canvas: HTMLCanvasElement = document.createElement('canvas');
    private ctx: CanvasRenderingContext2D | null = this.canvas.getContext("2d");

    readonly width: number = 400;
    readonly height: number = 500;

    clear() {
        this.ctx!.clearRect(0, 0, this.width, this.height);
    }

    createRect(
        x: number,
        y: number,
        width: number,
        height: number,
        color: string) {

        this.ctx!.fillStyle = color;
        this.ctx!.fillRect(x, y, width, height);
    }

    createShadowRect(x: number,
                     y: number,
                     width: number,
                     height: number,
                     repeats: number,
                     color: string) {

        this.ctx!.strokeStyle = color;
        this.ctx!.shadowColor = color;
        this.ctx!.shadowBlur = 3;

        for(let i: number = 0; i < repeats; i++) {
            this.ctx!.shadowBlur += 0.25;
            this.ctx!.strokeRect(x, y, width, height);
        }

        this.ctx!.shadowColor = 'rgba(0, 0, 0, 0)';
        this.ctx!.lineWidth = 2;
        this.ctx!.strokeRect(
            x + 2,
            y + 2,
            width - 4,
            height - 4);
    }

    createBall(x: number,
               y: number,
               radius: number,
               color: string) {

        this.ctx!.beginPath();
        this.ctx!.arc(x, y, radius, 0, 2 * Math.PI, false);
        this.ctx!.fillStyle = color;
        this.ctx!.fill();
        this.ctx!.lineWidth = 3;
        this.ctx!.strokeStyle = color;
        this.ctx!.stroke();
        this.ctx!.lineWidth = 1;
    }

    createPaddle(x: number,
                 y: number,
                 width: number,
                 height: number,
                 color: string) {

        this.ctx!.fillStyle = color;
        this.createShadowRect(x,
                              y,
                              width,
                              height,
                              3,
                              color);
        this.ctx!.fillRect(x,
                           y,
                           width,
                           height);
    }

    render() {
        this.canvas.setAttribute('width', String(this.width));
        this.canvas.setAttribute('height', String(this.height));
        document.body.appendChild(this.canvas);
    }

    detectCollision(obj1: {
                        x: number,
                        y: number,
                        width: number,
                        height: number
                    },
                    obj2: {
                        x: number,
                        y: number,
                        width: number,
                        height: number
                    }) {
        return obj1.x < obj2.x + obj2.width &&
            obj1.x + obj1.width > obj2.x &&
            obj1.y < obj2.y + obj2.height &&
            obj1.y + obj1.height > obj2.y;
    }
}

const canvas = new Canvas();