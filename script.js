const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Tamanho do bloco e da cobrinha
const box = 20;
let snake = [{ x: 9 * box, y: 9 * box }];
let direction = '';
let food = { x: Math.floor(Math.random() * 20) * box, y: Math.floor(Math.random() * 20) * box };
let score = 0;

// Mudança de direção
document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowUp' && direction !== 'DOWN') direction = 'UP';
    if (event.key === 'ArrowDown' && direction !== 'UP') direction = 'DOWN';
    if (event.key === 'ArrowLeft' && direction !== 'RIGHT') direction = 'LEFT';
    if (event.key === 'ArrowRight' && direction !== 'LEFT') direction = 'RIGHT';
});

// Função para desenhar a cobrinha e a comida
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Desenho da comida
    ctx.fillStyle = 'red';
    ctx.fillRect(food.x, food.y, box, box);

    // Desenho da cobrinha
    for (let i = 0; i < snake.length; i++) {
        ctx.fillStyle = `hsl(${(i * 30) % 360}, 100%, 50%)`; // Efeito arco-íris
        ctx.fillRect(snake[i].x, snake[i].y, box, box);
    }

    // Movimento da cobrinha
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if (direction === 'UP') snakeY -= box;
    if (direction === 'DOWN') snakeY += box;
    if (direction === 'LEFT') snakeX -= box;
    if (direction === 'RIGHT') snakeX += box;

    // Comida
    if (snakeX === food.x && snakeY === food.y) {
        score++;
        food = {
            x: Math.floor(Math.random() * 20) * box,
            y: Math.floor(Math.random() * 20) * box
        };
    } else {
        snake.pop(); // Remove a cauda
    }

    // Adiciona nova cabeça
    const newHead = { x: snakeX, y: snakeY };

    // Colisão com a borda ou com a própria cobra
    if (snakeX < 0 || snakeX >= canvas.width || snakeY < 0 || snakeY >= canvas.height || collision(newHead, snake)) {
        clearInterval(game);
        alert(`Game Over! Sua pontuação: ${score}`);
        document.location.reload();
    }

    snake.unshift(newHead); // Adiciona a nova cabeça
}

// Função para verificar colisão
function collision(head, array) {
    for (let i = 0; i < array.length; i++) {
        if (head.x === array[i].x && head.y === array[i].y) {
            return true;
        }
    }
    return false;
}

// Loop do jogo
const game = setInterval(draw, 100);
