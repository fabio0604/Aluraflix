const canvas = document.getElementById('pong');
const ctx = canvas.getContext('2d');

// Criação da palheta
const paddleWidth = 10;
const paddleHeight = 100;

const player = {
    x: 0,
    y: canvas.height / 2 - paddleHeight / 2,
    width: paddleWidth,
    height: paddleHeight,
    color: 'white',
    score: 0
};

const computer = {
    x: canvas.width - paddleWidth,
    y: canvas.height / 2 - paddleHeight / 2,
    width: paddleWidth,
    height: paddleHeight,
    color: 'white',
    score: 0
};

// Criação da bola
const ball = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    radius: 10,
    speed: 5,
    velocityX: 5,
    velocityY: 5,
    color: 'white'
};

// Desenho dos elementos
function draw() {
    // Limpa o canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Desenha a palheta do jogador
    ctx.fillStyle = player.color;
    ctx.fillRect(player.x, player.y, player.width, player.height);
    
    // Desenha a palheta do computador
    ctx.fillStyle = computer.color;
    ctx.fillRect(computer.x, computer.y, computer.width, computer.height);
    
    // Desenha a bola
    ctx.fillStyle = ball.color;
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2, false);
    ctx.closePath();
    ctx.fill();
    
    // Desenha a pontuação
    ctx.fillStyle = 'white';
    ctx.font = '20px Arial';
    ctx.fillText(player.score, canvas.width / 4, canvas.height / 5);
    ctx.fillText(computer.score, (3 * canvas.width) / 4, canvas.height / 5);
}

// Atualiza a posição dos elementos
function update() {
    // Movimento da bola
    ball.x += ball.velocityX;
    ball.y += ball.velocityY;

    // Colisão com o teto e o chão
    if (ball.y + ball.radius > canvas.height || ball.y - ball.radius < 0) {
        ball.velocityY = -ball.velocityY;
    }

    // Colisão com as palhetas
    if (ball.x - ball.radius < player.x + player.width && ball.y > player.y && ball.y < player.y + player.height) {
        ball.velocityX = -ball.velocityX;
    }

    if (ball.x + ball.radius > computer.x && ball.y > computer.y && ball.y < computer.y + computer.height) {
        ball.velocityX = -ball.velocityX;
    }

    // Marcação de pontos
    if (ball.x - ball.radius < 0) {
        computer.score++;
        resetBall();
    }

    if (ball.x + ball.radius > canvas.width) {
        player.score++;
        resetBall();
    }

    // Movimento da palheta do computador
    if (computer.y + computer.height / 2 < ball.y) {
        computer.y += 4;
    } else {
        computer.y -= 4;
    }
}

// Reseta a bola
function resetBall() {
    ball.x = canvas.width / 2;
    ball.y = canvas.height / 2;
    ball.velocityX = -ball.velocityX;
}

// Controle do jogador
canvas.addEventListener('mousemove', (event) => {
    const rect = canvas.getBoundingClientRect();
    player.y = event.clientY - rect.top - player.height / 2;

    // Impede que a palheta saia do canvas
    if (player.y < 0) player.y = 0;
    if (player.y + player.height > canvas.height) player.y = canvas.height - player.height;
});

// Loop do jogo
function gameLoop() {
    draw();
    update();
    requestAnimationFrame(gameLoop);
}

gameLoop();
