class MovingElement extends BaseElement {

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
        super(x, y, width, height, color);
    }

    get getSpeed() {
        return this.speed;
    }
}