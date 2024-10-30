const movies = [
    { title: "A Origem", description: "Um ladrão que invade os sonhos das pessoas." },
    { title: "Titanic", description: "Uma história de amor a bordo de um navio." },
    { title: "O Senhor dos Anéis", description: "Um hobbit é escolhido para destruir um anel mágico." },
    { title: "Matrix", description: "Um hacker descobre a verdade sobre sua realidade." },
    { title: "O Rei Leão", description: "A jornada de um jovem leão em busca de seu destino." },
    { title: "Jurassic Park", description: "Dinossauros são trazidos de volta à vida em um parque temático." },
    { title: "Star Wars", description: "Uma luta épica entre o bem e o mal em uma galáxia distante." },
    { title: "O Poderoso Chefão", description: "A história de uma família mafiosa." },
    { title: "Gladiador", description: "Um general romano se torna um gladiador." },
    { title: "Harry Potter", description: "Um jovem bruxo descobre seu legado." },
    { title: "Interstellar", description: "Exploradores viajam através de um buraco de minhoca." },
    { title: "Mad Max: Estrada da Fúria", description: "Uma luta pela sobrevivência em um mundo pós-apocalíptico." },
    { title: "A Bela e a Fera", description: "Uma história de amor entre uma jovem e uma besta." },
    { title: "Os Vingadores", description: "Heróis se unem para salvar o mundo." },
    { title: "A Rede Social", description: "A criação do Facebook e suas consequências." },
    { title: "Cinquenta Tons de Cinza", description: "Uma história de amor e desejo." },
    { title: "Zootopia", description: "Um mundo onde animais vivem em harmonia." },
    { title: "A Teoria de Tudo", description: "A vida do físico Stephen Hawking." },
    { title: "O Discurso do Rei", description: "Um rei supera sua gagueira." },
    { title: "A Múmia", description: "Uma aventura envolvendo uma antiga múmia." },
    { title: "Piratas do Caribe", description: "As aventuras do capitão Jack Sparrow." }
];

// Função para embaralhar um array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function loadGame() {
    const descriptionsContainer = document.getElementById('movie-descriptions');
    const titlesContainer = document.getElementById('movie-titles');

    // Exibir descrições na ordem original
    movies.forEach(movie => {
        const descDiv = document.createElement('div');
        descDiv.classList.add('movie-description');
        descDiv.textContent = movie.description;
        descDiv.onclick = () => selectDescription(movie.description);
        descriptionsContainer.appendChild(descDiv);
    });

    // Embaralhar a ordem dos títulos
    const shuffledMovies = [...movies];
    shuffleArray(shuffledMovies);

    // Exibir títulos na ordem embaralhada
    shuffledMovies.forEach(movie => {
        const titleDiv = document.createElement('div');
        titleDiv.classList.add('movie-title');
        titleDiv.textContent = movie.title;
        titleDiv.onclick = () => selectTitle(movie.title);
        titlesContainer.appendChild(titleDiv);
    });
}

// As funções restantes permanecem as mesmas...

// (As funções selectDescription, selectTitle, highlightSelection e checkAnswers são as mesmas)
