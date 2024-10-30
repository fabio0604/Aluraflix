const movies = [
    {
        title: "A Origem",
        trailer: "https://www.youtube.com/embed/8hP9D6kZseM",
        fullMovie: "https://www.youtube.com/embed/Yo1U4VZf3Jk",
        synopsis: "Um ladrão que invade os sonhos das pessoas é oferecido uma chance de redenção se conseguir implantar uma ideia na mente de alguém."
    },
    {
        title: "O Senhor dos Anéis: A Sociedade do Anel",
        trailer: "https://www.youtube.com/embed/V75dMMIW2B4",
        fullMovie: "https://www.youtube.com/embed/V75dMMIW2B4",
        synopsis: "Um hobbit é escolhido para levar um anel mágico a Mordor, onde ele deve destruí-lo antes que ele caia nas mãos do Senhor das Trevas."
    },
    {
        title: "Interstellar",
        trailer: "https://www.youtube.com/embed/zSWdZVtXT7E",
        fullMovie: "https://www.youtube.com/embed/zSWdZVtXT7E",
        synopsis: "Um grupo de exploradores viaja através de um buraco de minhoca em busca de um novo lar para a humanidade."
    }
];

function displayMovies() {
    const movieList = document.getElementById('movie-list');
    movies.forEach(movie => {
        const movieDiv = document.createElement('div');
        movieDiv.classList.add('movie');
        movieDiv.innerHTML = `
            <h2>${movie.title}</h2>
            <iframe src="${movie.trailer}" allowfullscreen></iframe>
            <div class="synopsis">${movie.synopsis}</div>
            <iframe src="${movie.fullMovie}" allowfullscreen></iframe>
        `;
        movieList.appendChild(movieDiv);
    });
}

window.onload = displayMovies;
