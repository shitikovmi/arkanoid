interface IMessage {
    readonly defeatText: string;
    readonly victoryText: string;

    hide() : void;
    showDefeatMessage(): void;
    showVictoryMessage(): void;
}

class Message implements IMessage{

    private element: HTMLElement | null = document.getElementById('message');

    readonly defeatText: string = '';
    readonly victoryText: string = '';

    constructor(defeatText: string = '' , victoryText: string = '') {
        this.defeatText = defeatText;
        this.victoryText  = victoryText;
    }

    hide() {
        this.element!.style.display = 'none';
        this.element!.textContent = '';
    }

    showDefeatMessage() {
        this.element!.style.display = 'block';
        this.element!.textContent = this.defeatText;
    }

    showVictoryMessage() {
        this.element!.style.display = 'block'
        this.element!.textContent = this.victoryText;
    }
}

const message = new Message(
    'game over \n press r to restart',
    'victory \n press e to go to the next level'
);