// Gerar um número aleatório para ser adivinhado
const randomNumber = Math.floor(Math.random() * 20) + 1;
// Contador e limitador de tentativas
let attempts = 0;
const maxAttempts = 7;

// Função para verificar o palpite do usuário
function checkGuess() {
    const userGuess = parseInt(document.getElementById('guessInput').value);
    const resultElement = document.getElementById('result');

    attempts += 1; // Incrementa a contagem de tentativas

    const difference = Math.abs(randomNumber - userGuess); // Calcula a diferença absoluta

    if (userGuess == randomNumber) {
        resultElement.textContent = `Parabéns! Você acertou em ${attempts} tentativas!`;
        document.getElementById('guessInput').disabled = true; // Desabilita mais entradas
        document.querySelector('button').disabled = true; // Desabilita o botão de adivinhar
    } else if (attempts < maxAttempts) {
        let message = `Você tem ${maxAttempts - attempts} tentativa(s) restante(s). `;
        if (difference >= 10) { // Considera uma grande diferença como "longe"
            message += userGuess > randomNumber ? "Passou longe! O número é bem menor, tente de novo." : "Passou longe! O número é bem maior, tente de novo.";
        } else { // Considera uma pequena distância como "perto"
            message += userGuess > randomNumber ? "Passou perto, mas o número é menor. Tente mais uma vez." : "Passou perto, mas o número é maior. Tente mais uma vez.";
        }
        resultElement.textContent = message;
    } else { // Usuário atingiu o número máximo de tentativas
        resultElement.textContent = `Você atingiu o máximo de tentativas! O número era ${randomNumber}.`;
        document.getElementById('guessInput').disabled = true; // Desabilita mais entradas
        document.querySelector('button').disabled = true; // Desabilita o botão de adivinhar
    }
}
