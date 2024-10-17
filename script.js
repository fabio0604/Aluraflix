// Array com pistas e respostas de filmes
const filmes = [
    { dica: "Um grupo de amigos encontra criaturas sobrenaturais em uma cidade pequena.", resposta: "Stranger Things" },
    { dica: "Um ladrão que rouba segredos através da invasão nos sonhos das pessoas.", resposta: "A Origem" },
    { dica: "Um jovem bruxo enfrenta seu destino em uma escola de magia.", resposta: "Harry Potter" },
    { dica: "Um super-herói bilionário que usa tecnologia para combater o crime.", resposta: "Homem de Ferro" }
    { dica: "Dois policiais tem a missão de levar duas garotas brancas a uma festa, mas no meio do caminho substituem as duas", resposta: "As Branquelas"}
    { dica: "Uma dupla de bandidos tenta roubar um diamante, mas acidentalmente o diamante é achado por um casal", resposta: "O Pequenino" }
    { dica: "Um homem fica milionário, e gasta toda a sua fortuna com sua familia em las vegas.", resposta: "Até que a sorte nos separe" }
    { dica: "Uma quadrilha criminosa quer dominar uma favela, mas o chefe é o vilão mais pretensioso do cinema brasileiro", resposta: "Cidade de Deus" }
    { dica: "Uma empresa vai contratar um chefe novo, e três famílias viajam para a praia", resposta: "Farofeiros" }
    { dica: "Um cientista descobre através de uma máquina como quebrar códigos de cartas nazistas", resposta: "O Jogo da Imitação" }
    { dica: "Dois adolescentes, descobrem uma ilha e nadam pelados, este filme passava muito na sessão da tarde", resposta: "Lagoa Azul" }
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
