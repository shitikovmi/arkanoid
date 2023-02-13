

class Container {

    private wallColor: string = '#292651';

    readonly wallSize: number = 7;
    readonly minX: number = 0;
    readonly minY: number = 0;
    readonly maxX: number = canvas.width - this.wallSize;
    readonly maxY: number = canvas.height - this.wallSize;

    render() {
        canvas.createRect(this.minX, this.minY, canvas.width, this.wallSize, this.wallColor);
        canvas.createRect(this.minX, this.minY, this.wallSize, canvas.height, this.wallColor);
        canvas.createRect(this.maxX, this.minY, this.wallSize, canvas.height, this.wallColor);
        canvas.createRect(this.minX, this.maxY, canvas.width, this.wallSize, this.wallColor);
    }
}

const container = new Container();