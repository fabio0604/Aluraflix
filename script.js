const videos = [
    {
        title: "Filme Titanic Completo",
        url: "https://www.youtube.com/watch?v=3nOydQf2tYQ"
    },
    {
        title: "HTML e CSS para Iniciantes",
        url: "https://www.youtube.com/embed/UB1O30fR-EE"
    },
    {
        title: "React para Iniciantes",
        url: "https://www.youtube.com/embed/dGcsHMXbSOA"
    }
];

function displayVideos() {
    const videoList = document.getElementById('video-list');
    videos.forEach(video => {
        const videoDiv = document.createElement('div');
        videoDiv.classList.add('video');
        videoDiv.innerHTML = `
            <h2>${video.title}</h2>
            <iframe src="${video.url}" frameborder="0" allowfullscreen></iframe>
        `;
        videoList.appendChild(videoDiv);
    });
}

window.onload = displayVideos;
