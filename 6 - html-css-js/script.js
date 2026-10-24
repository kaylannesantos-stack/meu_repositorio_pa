
// Função que irá executar quando clicar o botão btn-gerar
function gerarTabuada() {
    // Pegar o valor do campo input np HTML
    const numeroInput = document.getElementById('numero-input')
    // Converte o texto quw veio dp HTML para número inteiro
    let numero = parseInt(numeroInput.value)

    // Pega o elemento onde a tabuada será exibido no HTML
    const resultadoDiv = document.getElementById('resultado-aqui')
    
    // Limpa o conteudo anterior no campo
    resultadoDiv.innerHTML = ''
    // Adicionar o título da tabuada com tag h2.
    resultadoDiv.innerHTML += `<h2>Tabuada do número ${numero}</h2>`

    // Laço de repetição para gerar tabuado de 1 até 10 
    for (let i = 1; i <= 10; i++) {
        let resultado = numero * i
        resultadoDiv.innerHTML += `<p>${numero} X ${i} = ${resultado}</p>`
    }

}
// Pegar o elemento onde a tabuada será exibido no HTML a associa uma constante
const btnGerar = document.getElementById('btn-gerar')
// Mostra o resultado
btnGerar.addEventListener('click',gerarTabuada)

