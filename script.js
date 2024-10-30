const gameContainer = document.getElementById('game-container');
const messageDiv = document.getElementById('message');

const mapSize = 5;
let playerPosition = { x: 0, y: 0 };
let items = [
    { x: 1, y: 1, collected: false },
    { x: 3, y: 3, collected: false }
];

// Criação do mapa
function createMap() {
    for (let y = 0; y < mapSize; y++) {
        for (let x = 0; x < mapSize; x++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.dataset.x = x;
            cell.dataset.y = y;
            gameContainer.appendChild(cell);
        }
    }
    updateMap();
}

// Atualiza a posição do jogador e itens
function updateMap() {
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        const x = parseInt(cell.dataset.x);
        const y = parseInt(cell.dataset.y);
        cell.classList.remove('player', 'item');

        // Adiciona o jogador
        if (x === playerPosition.x && y === playerPosition.y) {
            cell.classList.add('player');
        }

        // Adiciona os itens
        items.forEach(item => {
            if (item.x === x && item.y === y && !item.collected) {
                cell.classList.add('item');
            }
        });
    });
}

// Movimenta o jogador
function movePlayer(dx, dy) {
    const newX = playerPosition.x + dx;
    const newY = playerPosition.y + dy;

    if (newX >= 0 && newX < mapSize && newY >= 0 && newY < mapSize) {
        playerPosition.x = newX;
        playerPosition.y = newY;

        // Verifica se o jogador coletou um item
        items.forEach(item => {
            if (item.x === playerPosition.x && item.y === playerPosition.y && !item.collected) {
                item.collected = true;
                messageDiv.textContent = "Você coletou um item!";
            }
        });

        updateMap();
    }
}

// Controle de teclado
window.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'ArrowUp':
            movePlayer(0, -1);
            break;
        case 'ArrowDown':
            movePlayer(0, 1);
            break;
        case 'ArrowLeft':
            movePlayer(-1, 0);
            break;
        case 'ArrowRight':
            movePlayer(1, 0);
            break;
    }
});

// Iniciar o jogo
createMap();
