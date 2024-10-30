let score = 0;
let gameInterval;
const gameArea = document.getElementById('game-area');
const scoreDisplay = document.getElementById('score');
const crosshair = document.getElementById('crosshair');

function startGame() {
    score = 0;
    scoreDisplay.textContent = `Pontuação: ${score}`;
    gameArea.innerHTML = ''; // Limpa a área de jogo
    gameArea.appendChild(crosshair); // Adiciona a mira de volta
    gameInterval = setInterval(spawnBird, 1000); // Gera um passarinho a cada segundo
}

function spawnBird() {
    const bird = document.createElement('div');
    bird.classList.add('bird');

    // Define posição inicial aleatória para o passarinho
    bird.style.left = Math.random() * (gameArea.clientWidth - 50) + 'px';
    bird.style.top = Math.random() * (gameArea.clientHeight - 50) + 'px';

    // Movimento do passarinho
    const direction = Math.random() < 0.5 ? 1 : -1; // Aleatoriamente vai para a direita ou esquerda
    bird.style.transition = `transform 2s linear`;
    bird.style.transform = `translateX(${direction * 300}px)`;

    // Remove o passarinho após 3 segundos se não for "atirado"
    setTimeout(() => {
        if (bird.parentElement) {
            bird.remove();
        }
    }, 3000);

    gameArea.appendChild(bird);

    // Detecta se a mira está sobre o passarinho
    crosshair.onclick = function() {
        const birdRect = bird.getBoundingClientRect();
        const crosshairRect = crosshair.getBoundingClientRect();

        // Checa se a mira está sobre o passarinho
        if (
            crosshairRect.left < birdRect.right &&
            crosshairRect.right > birdRect.left &&
            crosshairRect.top < birdRect.bottom &&
            crosshairRect.bottom > birdRect.top
        ) {
            score++;
            scoreDisplay.textContent = `Pontuação: ${score}`;
            bird.remove(); // Remove o passarinho quando "atirado"
        }
    };
}

// Move a mira com o mouse
gameArea.onmousemove = function(event) {
    const rect = gameArea.getBoundingClientRect();
    crosshair.style.left = (event.clientX - rect.left - crosshair.clientWidth / 2) + 'px';
    crosshair.style.top = (event.clientY - rect.top - crosshair.clientHeight / 2) + 'px';
};

document.getElementById('start-button').onclick = startGame;
