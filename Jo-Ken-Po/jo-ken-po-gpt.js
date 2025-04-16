
let res = document.querySelector("#res")
let jogador = ''
res.style.background = "white"

function animarJoKenPo(callback) {
    res.innerHTML = "Jô..."
    setTimeout(() => {
        res.innerHTML = "Ken..."
    }, 1000)
    setTimeout(() => {
        res.innerHTML = "Pô!"
    }, 2000)
    setTimeout(() => {
        callback()
    }, 3000)
}

function pedra() {
    jogador = 'Pedra'
    res.style.background = "white"
    res.style.boxShadow = "8px 8px 12px  #10454fab"
    animarJoKenPo(() => {
        let computador = Math.floor(Math.random() * 3) + 1;
        let maquina = ['Pedra', 'Papel', 'Tesoura'][computador - 1]

        res.innerHTML = ""

        if (maquina === jogador) {
            res.innerHTML = `<br><strong>Empate! 😐</strong><br><br>O jogador escolheu <b>${jogador}</b> e a máquina escolheu <b>${maquina}</b>`
            res.style.background = "#F5EC31"
            res.style.boxShadow = "0px 0px 8px 8px rgba(245, 235, 49, 0.8)"
        } else if (maquina === 'Papel') {
            res.innerHTML = `<br><strong>A Máquina venceu! 😢</strong><br><br>O jogador escolheu <b>${jogador}</b> e a máquina escolheu <b>${maquina}</b>`
            res.style.background = "#F53624"
            res.style.boxShadow = "0px 0px 8px 8px rgba(245, 53, 36, 0.77)"
        } else {
            res.innerHTML = `<br><strong>Você venceu! 🎉</strong><br><br>O jogador escolheu <b>${jogador}</b> e a máquina escolheu <b>${maquina}</b>`
            res.style.background = "#31F579"
            res.style.boxShadow = "0px 0px 8px 8px rgba(49, 245, 121, 0.72)"
        }
    });
}

function papel() {
    jogador = 'Papel'
    res.style.background = "white"
    res.style.boxShadow = "8px 8px 12px  #10454fab"
    animarJoKenPo(() => {
        let computador = Math.floor(Math.random() * 3) + 1;
        let maquina = ['Pedra', 'Papel', 'Tesoura'][computador - 1]

        res.innerHTML = ""

        if (maquina === jogador) {
            res.innerHTML = `<br><strong>Empate! 😐</strong><br><br>O jogador escolheu <b>${jogador}</b> e a máquina escolheu <b>${maquina}</b>`
            res.style.background = "#F5EC31"
            res.style.boxShadow = "0px 0px 8px 8px rgba(245, 235, 49, 0.8)"
        } else if (maquina === 'Tesoura') {
            res.innerHTML = `<br><strong>A Máquina venceu! 😢</strong><br><br>O jogador escolheu <b>${jogador}</b> e a máquina escolheu <b>${maquina}</b>`
            res.style.background = "#F53624"
            res.style.boxShadow = "0px 0px 8px 8px rgba(245, 53, 36, 0.77)"
        } else {
            res.innerHTML = `<br><strong>Você venceu! 🎉</strong><br><br>O jogador escolheu <b>${jogador}</b> e a máquina escolheu <b>${maquina}</b>`
            res.style.background = "#31F579"
            res.style.boxShadow = "0px 0px 8px 8px rgba(49, 245, 121, 0.72)"
        }
    });
}

function tesoura() {
    jogador = 'Tesoura'
    res.style.background = "white"
    res.style.boxShadow = "8px 8px 12px  #10454fab"
    animarJoKenPo(() => {
        let computador = Math.floor(Math.random() * 3) + 1;
        let maquina = ['Pedra', 'Papel', 'Tesoura'][computador - 1]

        res.innerHTML = ""

        if (maquina === jogador) {
            res.innerHTML = `<br><strong>Empate! 😐</strong><br><br>O jogador escolheu <b>${jogador}</b> e a máquina escolheu <b>${maquina}</b>`
            res.style.background = "#F5EC31"
            res.style.boxShadow = "0px 0px 8px 8px rgba(245, 235, 49, 0.8)"
        } else if (maquina === 'Pedra') {
            res.innerHTML = `<br><strong>A Máquina venceu! 😢</strong><br><br>O jogador escolheu <b>${jogador}</b> e a máquina escolheu <b>${maquina}</b>`
            res.style.background = "#F53624"
            res.style.boxShadow = "0px 0px 8px 8px rgba(245, 53, 36, 0.77)"
        } else {
            res.innerHTML = `<br><strong>Você venceu! 🎉</strong><br><br>O jogador escolheu <b>${jogador}</b> e a máquina escolheu <b>${maquina}</b>`
            res.style.background = "#31F579"
            res.style.boxShadow = "0px 0px 8px 8px rgba(49, 245, 121, 0.72)"
        }
    });
}

function limpar() {
    res.style.boxShadow = "8px 8px 12px  #10454fab"
    jogador = ''
    res.style.background = "white"
    res.innerHTML = `<br><br>Que tal testar sua sorte?<br>Aposto que consigo ganhar 😎`
}
