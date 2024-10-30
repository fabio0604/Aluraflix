let score = 0;
let gameInterval;
const gameArea = document.getElementById('game-area');
const scoreDisplay = document.getElementById('score');

function startGame() {
    score = 0;
    scoreDisplay.textContent = `Pontuação: ${score}`;
    gameArea.innerHTML = ''; // Limpa a área de jogo
    gameInterval = setInterval(spawnBird, 1000); // Gera um passarinho a cada segundo
}

function spawnBird() {
    const bird = document.createElement('div');
    bird.classList.add('bird');
    
    // Define posição aleatória para o passarinho
    bird.style.left = Math.random() * (gameArea.clientWidth - 50) + 'px';
    bird.style.top = Math.random() * (gameArea.clientHeight - 50) + 'px';

    bird.onclick = () => {
        score++;
        scoreDisplay.textContent = `Pontuação: ${score}`;
        bird.remove(); // Remove o passarinho quando clicado
    };

    gameArea.appendChild(bird);

    // Remove o passarinho após 2 segundos se não for clicado
    setTimeout(() => {
        if (bird.parentElement) {
            bird.remove();
        }
    }, 2000);
}

document.getElementById('start-button').onclick = startGame;
