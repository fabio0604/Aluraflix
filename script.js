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

let selectedDescriptions = [];
let selectedTitles = [];

function loadGame() {
    const descriptionsContainer = document.getElementById('movie-descriptions');
    const titlesContainer = document.getElementById('movie-titles');

    movies.forEach(movie => {
        const descDiv = document.createElement('div');
        descDiv.classList.add('movie-description');
        descDiv.textContent = movie.description;
        descDiv.onclick = () => selectDescription(movie.description);
        descriptionsContainer.appendChild(descDiv);

        const titleDiv = document.createElement('div');
        titleDiv.classList.add('movie-title');
        titleDiv.textContent = movie.title;
        titleDiv.onclick = () => selectTitle(movie.title);
        titlesContainer.appendChild(titleDiv);
    });
}

function selectDescription(description) {
    if (!selectedDescriptions.includes(description)) {
        selectedDescriptions.push(description);
        highlightSelection();
    }
}

function selectTitle(title) {
    if (!selectedTitles.includes(title)) {
        selectedTitles.push(title);
        highlightSelection();
    }
}

function highlightSelection() {
    const descDivs = document.querySelectorAll('.movie-description');
    const titleDivs = document.querySelectorAll('.movie-title');

    descDivs.forEach(descDiv => {
        descDiv.classList.remove('selected');
        if (selectedDescriptions.includes(descDiv.textContent)) {
            descDiv.classList.add('selected');
        }
    });

    titleDivs.forEach(titleDiv => {
        titleDiv.classList.remove('selected');
        if (selectedTitles.includes(titleDiv.textContent)) {
            titleDiv.classList.add('selected');
        }
    });
}

function checkAnswers() {
    let correctCount = 0;
    
    selectedDescriptions.forEach(description => {
        const movie = movies.find(movie => movie.description === description);
        if (movie && selectedTitles.includes(movie.title)) {
            correctCount++;
        }
    });

    const resultDiv = document.getElementById('result');
    resultDiv.textContent = `Você acertou ${correctCount} de ${movies.length} filmes!`;
}

document.getElementById('check-answers').onclick = checkAnswers;

window.onload = loadGame;
