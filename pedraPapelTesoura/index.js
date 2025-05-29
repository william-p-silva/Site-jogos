const opcoes = ['Pedra', 'Papel', 'Tesoura'];
let resultado = document.querySelector("#resultado");
let placarOponente = document.querySelector("#placarOponente");
let placarJogador = document.querySelector("#placarJogado");


let vitorias = 0;
let derrotas = 0;
let empates = 0;

placarOponente.innerHTML = `Placar do Oponente = ${derrotas}`;
placarJogador.innerHTML = `${vitorias} = Placar do jogador`;

resultado.innerHTML = "Faça sua jogada!";

function pedra(){
    const escolhaOponente = Math.floor(Math.random() * 3);
    const escolhaJogador = 0;
    if (escolhaJogador == escolhaOponente){
        resultado.innerHTML = `Seu Oponente escolheu ${opcoes[escolhaOponente]} e você escolheu ${opcoes[escolhaJogador]}<br>`
        resultado.innerHTML += "<br>Empate!";
        empates++;
    }else if (escolhaOponente == 1){
        resultado.innerHTML = `Seu Oponente escolheu ${opcoes[escolhaOponente]} e você escolheu ${opcoes[escolhaJogador]}<br>`
        resultado.innerHTML += "<br>Você Perdeu!";
        derrotas++;
    }else if (escolhaOponente == 2){
        resultado.innerHTML = `Seu Oponente escolheu ${opcoes[escolhaOponente]} e você escolheu ${opcoes[escolhaJogador]}<br>`
        resultado.innerHTML += "<br>Você Ganhou!!!";
        vitorias++;
        
    }
    placarOponente.innerHTML = `Placar do Oponente = ${derrotas}`;
    placarJogador.innerHTML = `${vitorias} = Placar do jogador`;
}
function papel(){
    const escolhaOponente = Math.floor(Math.random() * 3);
    const escolhaJogador = 1;
    if (escolhaJogador == escolhaOponente){
        resultado.innerHTML = `Seu Oponente escolheu ${opcoes[escolhaOponente]} e você escolheu ${opcoes[escolhaJogador]}<br>`
        resultado.innerHTML += "<br>Empate!";
        empates++;
    }else if (escolhaOponente == 2){
        resultado.innerHTML = `Seu Oponente escolheu ${opcoes[escolhaOponente]} e você escolheu ${opcoes[escolhaJogador]}<br>`
        resultado.innerHTML += "<br>Você Perdeu!";
        derrotas++;
    }else if (escolhaOponente == 0){
        resultado.innerHTML = `Seu Oponente escolheu ${opcoes[escolhaOponente]} e você escolheu ${opcoes[escolhaJogador]}<br>`
        resultado.innerHTML += "<br>Você Ganhou!!!";
        vitorias++;
        
    }
    placarOponente.innerHTML = `Placar do Oponente = ${derrotas}`;
    placarJogador.innerHTML = `${vitorias} = Placar do jogador`;
}
function tesoura(){
    const escolhaOponente = Math.floor(Math.random() * 3);
    const escolhaJogador = 2;
    if (escolhaJogador == escolhaOponente){
        resultado.innerHTML = `Seu Oponente escolheu ${opcoes[escolhaOponente]} e você escolheu ${opcoes[escolhaJogador]}<br>`
        resultado.innerHTML += "<br>Empate!";
        empates++;
    }else if (escolhaOponente == 0){
        resultado.innerHTML = `Seu Oponente escolheu ${opcoes[escolhaOponente]} e você escolheu ${opcoes[escolhaJogador]}<br>`
        resultado.innerHTML += "<br>Você Perdeu!";
        
        derrotas++;
    }else if (escolhaOponente == 1){
        resultado.innerHTML = `Seu Oponente escolheu ${opcoes[escolhaOponente]} e você escolheu ${opcoes[escolhaJogador]}<br>`
        resultado.innerHTML += "<br>Você Ganhou!!!";
        vitorias++;
        
    }
    placarOponente.innerHTML = `Placar do Oponente = ${derrotas}`;
    placarJogador.innerHTML = `${vitorias} = Placar do jogador`;
}
