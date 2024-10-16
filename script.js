const dino = document.getElementById('dino');
const game = document.getElementById('game');
const scoreDisplay = document.getElementById('score');

let score = 0;
let gameInterval;
let isJumping = false;

function startGame() {
    gameInterval = setInterval(() => {
        score++;
        scoreDisplay.innerText = score;
        spawnCar();
    }, 1000);
}

function spawnCar() {
    const car = document.createElement('div');
    car.classList.add('car');
    car.style.left = `${game.clientWidth}px`;
    car.style.bottom = `${Math.random() * (game.clientHeight - 30)}px`;
    
    game.appendChild(car);
    
    moveCar(car);
}

function moveCar(car) {
    const moveInterval = setInterval(() => {
        const carPosition = parseInt(car.style.left);
        
        if (carPosition <= -30) {
            clearInterval(moveInterval);
            game.removeChild(car);
        } else {
            car.style.left = `${carPosition - 5}px`;

            if (checkCollision(car)) {
                clearInterval(moveInterval);
                clearInterval(gameInterval);
                alert(`Game Over! Sua pontuação: ${score}`);
                resetGame();
            }
        }
    }, 20);
}

function checkCollision(car) {
    const dinoRect = dino.getBoundingClientRect();
    const carRect = car.getBoundingClientRect();

    return !(
        dinoRect.top > carRect.bottom ||
        dinoRect.bottom < carRect.top ||
        dinoRect.right < carRect.left ||
        dinoRect.left > carRect.right
    );
}

document.addEventListener('keydown', (event) => {
    if (event.code === 'Space' && !isJumping) {
        jump();
    }
});

function jump() {
    isJumping = true;
    let jumpHeight = 0;
    const jumpInterval = setInterval(() => {
        if (jumpHeight >= 60) {
            clearInterval(jumpInterval);
            fall();
        } else {
            jumpHeight += 5;
            dino.style.bottom = `${10 + jumpHeight}px`;
        }
    }, 20);
}

function fall() {
    const fallInterval = setInterval(() => {
        if (parseInt(dino.style.bottom) <= 10) {
            clearInterval(fallInterval);
            isJumping = false;
            dino.style.bottom = '10px';
        } else {
            dino.style.bottom = `${parseInt(dino.style.bottom) - 5}px`;
        }
    }, 20);
}

function resetGame() {
    score = 0;
    scoreDisplay.innerText = score;
    while (game.firstChild) {
        game.removeChild(game.firstChild);
    }
    startGame();
}

startGame();
