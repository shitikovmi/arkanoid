class BaseElement {

    constructor(
        protected x: number,
        protected y: number,
        protected width: number,
        protected height: number,
        protected color: string
    ) {}

    get getX() {
        return this.x;
    }

    get getY() {
        return this.y;
    }

    get getWidth() {
        return this.width;
    }

    get getHeight() {
        return this.height;
    }
}