
class Characteristics {

    private _level: number = 1
    private _score: number = 0;
    private _lives: number = 3;
    private _status: string = 'idle';

    get status() {
        return this._status;
    }

    get lives() {
        return this._lives;
    }

    get score() {
        return this._score;
    }

    get level() {
        return this._level
    }

    nextLevel() {
        this._level += 1;
    }

    incScore() {
        this._score += 100;
    }

    decLives() {
        this._lives -= 1;
    }

    reset() {
        this._level = 1;
        this._score = 0;
        this._lives = 3;
        this._status = 'idle';
    }

    setDefeatStatus() {
        this._status = 'defeat';
    }

    setVictoryStatus() {
        this._status = 'victory';
    }

    render() {
        document.getElementById("level")!.textContent = String(this._level);
        document.getElementById("score")!.textContent = String(this._score);
        document.getElementById("lives")!.textContent = String(this._lives);
    }
}

const characteristics = new Characteristics();