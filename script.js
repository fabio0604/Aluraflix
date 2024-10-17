// Array com pistas e respostas de filmes
const filmes = [
    { dica: "Um grupo de amigos encontra criaturas sobrenaturais em uma cidade pequena.", resposta: "Stranger Things" },
    { dica: "Um ladrão que rouba segredos através da invasão nos sonhos das pessoas.", resposta: "A Origem" },
    { dica: "Um jovem bruxo enfrenta seu destino em uma escola de magia.", resposta: "Harry Potter" },
    { dica: "Um super-herói bilionário que usa tecnologia para combater o crime.", resposta: "Homem de Ferro" }
];

// Escolher um filme aleatório
let filmeAtual = filmes[Math.floor(Math.random() * filmes.length)];

// Atualizar a pista no HTML
document.getElementById("hint").innerText = "Pista: " + filmeAtual.dica;

// Função para verificar a resposta do usuário
function checkGuess() {
    const userGuess = document.getElementById("guess-input").value;

    if (userGuess.toLowerCase() === filmeAtual.resposta.toLowerCase()) {
        document.getElementById("result").innerText = "Parabéns! Você acertou!";
    } else {
        document.getElementById("result").innerText = "Resposta errada. Tente novamente!";
    }
}
