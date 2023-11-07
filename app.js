let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
menssagemInicial();

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.0});
}
function menssagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do Número Secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10'); 
}

function verificarChute() {
    let chute = document.querySelector('input').value;
    console.log(chute==numeroSecreto);

    if (chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas == 1 ? 'tentativa' : 'tentativas';
        let menssagemTentativas = `Parabéns, você acertou com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', menssagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else if (chute > numeroSecreto){
        exibirTextoNaTela('p', `O número secreto é menor que ${chute}.`);
    } else {
        exibirTextoNaTela('p', `O número secreto é maior que ${chute}.`);
    }
    tentativas++;
    limparCampo();
}

function gerarNumeroAleatorio() {
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if(quantidadeDeElementosNaLista == numeroLimite){
        listaDeNumerosSorteados == [];
    }

    let numeroEscolhido = parseInt(Math.random() *numeroLimite+1);
    if(listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    menssagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}