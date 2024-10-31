// script.js
const apiKey = 'SUA_CHAVE_DA_API_YOUTUBE';

function searchTrailer() {
    const movieName = document.getElementById("movieInput").value;
    if (movieName === '') {
        alert("Por favor, digite o nome do filme.");
        return;
    }

    fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${movieName}+trailer&type=video&key=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            const trailerContainer = document.getElementById("trailerContainer");
            trailerContainer.innerHTML = '';

            if (data.items && data.items.length > 0) {
                const videoId = data.items[0].id.videoId;
                const iframe = document.createElement("iframe");
                iframe.src = `https://www.youtube.com/embed/${videoId}`;
                trailerContainer.appendChild(iframe);
            } else {
                trailerContainer.innerHTML = "<p>Trailer não encontrado.</p>";
            }
        })
        .catch(error => {
            console.error("Erro ao buscar o trailer:", error);
        });
}
