class Level {

    init = () => {
        this.bindKeyupEventListeners();
        this.bindKeydownEventListeners();
        requestAnimationFrame(this.process);
        ball.init();
        bricks.fillBricksArray();
    }

    process = () => {
        requestAnimationFrame(this.process);
        canvas.clear();
        characteristics.render();
        container.render();
        if (characteristics.lives === 0) {
            message.showDefeatMessage();
            characteristics.setDefeatStatus();
            return
        }
        paddle.render();
        paddle.moving();
        paddle.onWallCollision();
        ball.render();
        ball.collision();
        ball.moving();
        bricks.render();
        bricks.collisionWithBall();
        const ballObj = {
            x: ball.getX,
            y: ball.getY,
            width: ball.getWidth,
            height: ball.getHeight,
        }

        const paddleObj = {
            x: paddle.getX,
            y: paddle.getY,
            width: paddle.getWidth,
            height: paddle.getHeight,
        }

        if (canvas.detectCollision(ballObj, paddleObj)) {
            ball.changeDirectionY();
            ball.pushFromPaddle();
        }
    }

    bindKeyupEventListeners() {
        document.addEventListener('keyup', (e) => {
            switch (e.code) {
                case 'ArrowRight':
                    paddle.stopMoving();
                    return;
                case 'ArrowLeft':
                    paddle.stopMoving();
                    return;
            }
        })
    }

    bindKeydownEventListeners() {
        document.addEventListener('keydown',(e) => {
            switch (e.code) {
                case 'ArrowRight':
                    paddle.moveRight();
                    return;
                case 'ArrowLeft':
                    paddle.moveLeft();
                    return;
                case 'KeyR':
                    if (characteristics.status === 'defeat') {
                        characteristics.reset();
                        bricks.fillBricksArray();
                        message.hide();
                    }
                    return;
                case 'KeyE':
                    if (characteristics.status === 'victory') {
                        characteristics.nextLevel();
                    }
            }
        })
    }
}
const level = new Level();