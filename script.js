const car = document.getElementById('car');
const obstacle = document.getElementById('obstacle');
const game = document.getElementById('game');

let gameInterval;
let obstacleInterval;
let score = 0;

document.addEventListener('keydown', moveCar);

function moveCar(event) {
    const carRect = car.getBoundingClientRect();
    const gameRect = game.getBoundingClientRect();
    
    if (event.key === 'ArrowLeft' && carRect.left > gameRect.left) {
        car.style.left = `${carRect.left - 20}px`;
    }
    if (event.key === 'ArrowRight' && carRect.right < gameRect.right) {
        car.style.left = `${carRect.left + 20}px`;
    }
}

function startGame() {
    gameInterval = setInterval(() => {
        score++;
        obstacle.style.top = `${parseInt(obstacle.style.top) + 5}px`;

        if (parseInt(obstacle.style.top) > game.clientHeight) {
            obstacle.style.top = '-80px';
            obstacle.style.left = `${Math.random() * (game.clientWidth - 40)}px`;
        }

        if (isCollision()) {
            alert(`Game Over! Score: ${score}`);
            resetGame();
        }
    }, 100);

    obstacleInterval = setInterval(() => {
        obstacle.style.top = '-80px';
        obstacle.style.left = `${Math.random() * (game.clientWidth - 40)}px`;
    }, 2000);
}

function isCollision() {
    const carRect = car.getBoundingClientRect();
    const obstacleRect = obstacle.getBoundingClientRect();
    
    return !(
        carRect.top > obstacleRect.bottom ||
        carRect.bottom < obstacleRect.top ||
        carRect.right < obstacleRect.left ||
        carRect.left > obstacleRect.right
    );
}

function resetGame() {
    clearInterval(gameInterval);
    clearInterval(obstacleInterval);
    obstacle.style.top = '-80px';
    obstacle.style.left = `${Math.random() * (game.clientWidth - 40)}px`;
    score = 0;
}

startGame();
