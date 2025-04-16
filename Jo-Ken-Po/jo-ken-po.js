

let res = document.querySelector("#res")
let jogador = ''
res.style.background = "white"



function animarJoKenPo(callback){
    res.innerHTML = "<br><br><strong>Jô...✊</strong>"
    res.style.background = "#31F579"
    res.style.boxShadow = "0px 0px 8px 8px rgba(49, 245, 121, 0.72)"
    setTimeout(() => {
        res.innerHTML = "<br><br><strong>Ken...📄</srong>"
        res.style.background = "#F5EC31"
        res.style.boxShadow = "0px 0px 8px 8px rgba(245, 235, 49, 0.8)"
    }, 1000)
    setTimeout(() => {
        res.innerHTML = "<br><br><strong>Pô!!!✂️</srong>"
        res.style.background = "#F53624"
        res.style.boxShadow = "0px 0px 8px 8px rgba(245, 53, 36, 0.77)"
    },2000)
    setTimeout(() => {
        callback()
    }, 3000)
}




function pedra(){

    let computador = Math.floor(Math.random() * 3) + 1;
    let jogador = 'Pedra'
    res.style.boxShadow = "8px 8px 12px  #10454fab"
    res.style.background = "white"
    
    animarJoKenPo(() => {
        res.innerHTML = ''
        let maquina = ["Pedra", "Papel", "Tesoura"][computador - 1]
        if (computador == 1){
            
            res.innerHTML += `<br><strong>Empate! 😐</strong><br>`
            res.innerHTML += "<br>"
            res.innerHTML += `O jogador escolheu <b>${jogador}</b> e a maquina escolheu <b> ${maquina}</b> `
            res.style.background = "#F5EC31"
            res.style.boxShadow = "0px 0px 8px 8px rgba(245, 235, 49, 0.8)"
            
            

        }else if (computador == 2){
            
            res.innerHTML += `<br><strong>A Maquina venceu! 😢</strong><br>`
            res.innerHTML += "<br>"
            res.innerHTML += `O jogador escolheu <b>${jogador}</b> e a maquina escolheu <b> ${maquina}</b> `
            res.style.background = "#F53624"
            res.style.boxShadow = "0px 0px 8px 8px rgba(245, 53, 36, 0.77)"
            

        }else if (computador == 3){

            
            res.innerHTML += `<br><strong>Você venceu! 🎉</strong><br>`
            res.innerHTML += "<br>"
            res.innerHTML +=`O jogador escolheu <b>${jogador}</b> e a maquina escolheu <b> ${maquina}</b> `
            res.style.background = "#31F579"
            res.style.boxShadow = "0px 0px 8px 8px rgba(49, 245, 121, 0.72)"

        }
    });//final da função animarjokenpo
}

function papel(){

    res.style.boxShadow = "8px 8px 12px  #10454fab"
    res.style.background = "white"
    let computador = Math.floor(Math.random() * 3) + 1;
    let jogador = 'Papel'
    res.innerHTML = ''

    animarJoKenPo(() => {
        res.innerHTML = ''
        let maquina = ["Pedra", "Papel", "Tesoura"][computador - 1]
        if (computador == 1){
            
            res.innerHTML += `<br><strong>Você venceu! 🎉</strong><br>`
            res.innerHTML += "<br>"
            res.innerHTML += `O jogador escolheu <b>${jogador}</b> e a maquina escolheu <b> ${maquina}</b> `
            res.style.background = "#31F579"
            res.style.boxShadow = "0px 0px 8px 8px rgba(49, 245, 121, 0.72)"

        }else if (computador == 2){
            
            res.innerHTML += `<br><strong>Empate! 😐</strong><br>`
            res.innerHTML += "<br>"
            res.innerHTML += `O jogador escolheu <b>${jogador}</b> e a maquina escolheu <b> ${maquina}</b> `
            res.style.background = "#F5EC31"
            res.style.boxShadow = "0px 0px 8px 8px rgba(245, 235, 49, 0.8)"

        }else if (computador == 3){

            
            res.innerHTML += `<br><strong>A Maquina venceu! 😢</strong><br>`
            res.innerHTML += "<br>"
            res.innerHTML +=`O jogador escolheu <b>${jogador}</b> e a maquina escolheu <b> ${maquina}</b> `
            res.style.background = "#F53624"
            res.style.boxShadow = "0px 0px 8px 8px rgba(245, 53, 36, 0.77)"

        }
    });//final da função animarjokenpo
}

function tesoura(){

    res.style.boxShadow = "8px 8px 12px  #10454fab"
    res.style.background = "white"
    let computador = Math.floor(Math.random() * 3) + 1;
    let jogador = 'Tesoura'
    res.innerHTML = ''

    animarJoKenPo(() => {
        res.innerHTML = ''
        let maquina = ["Pedra", "Papel", "Tesoura"][computador - 1]
        if (computador == 1){
            
            res.innerHTML += `<br><strong>A Maquina venceu! 😢</strong><br>`
            res.innerHTML += "<br>"
            res.innerHTML += `O jogador escolheu <b>${jogador}</b> e a maquina escolheu <b> ${maquina}</b> `
            res.style.background = "#F53624"
            res.style.boxShadow = "0px 0px 8px 8px rgba(245, 53, 36, 0.77)"

        }else if (computador == 2){
            
            res.innerHTML += `<br><strong>Você venceu! 🎉</strong><br>`
            res.innerHTML += "<br>"
            res.innerHTML += `O jogador escolheu <b>${jogador}</b> e a maquina escolheu <b> ${maquina}</b> `
            res.style.background = "#31F579"
            res.style.boxShadow = "0px 0px 8px 8px rgba(49, 245, 121, 0.72)"

        }else if (computador == 3){

            
            res.innerHTML += `<br><strong>Empate! 😐</strong><br>`
            res.innerHTML += "<br>"
            res.innerHTML +=`O jogador escolheu <b>${jogador}</b> e a maquina escolheu <b> ${maquina}</b> `
            res.style.background = "#F5EC31"
            res.style.boxShadow = "0px 0px 8px 8px rgba(245, 235, 49, 0.8)"
        }
    });//final da função animarjokenpo
}

function limpar(){
    res.style.boxShadow = "8px 8px 12px  #10454fab"
    res.style.background = "white"
    let jogador = ''
    res.innerHTML = `<br>
    <br>
    Que tal testar sua sorte? <br>
    Aposto que consigo ganhar`
}




let body = document.querySelector("#corpo")
var data = new Date
var hora = data.getHours()

function carregar(){
    if (hora > 0 && hora <= 6){

        body.style.backgroundImage = "linear-gradient(to right bottom, #012030, #003b4e, #00586a, #007884, #0d989a, #33aca3, #51bfaa, #6fd3b0, #8bdeb1, #a5e9b2, #c0f3b5, #dafdba)";

    }else if(hora > 6 && hora <= 12){

        body.style.backgroundImage = "linear-gradient(to right bottom, #016a6d, #1f7d69, #4b8d5c, #7c9a4d, #b2a245, #b6a547, #bba849, #bfab4b, #90ab56, #63a66b, #3a9d80, #1b9290)";

    }else if (hora > 12 && hora <= 18){

        body.style.backgroundImage = "linear-gradient(to left top, #f25116, #e94c1f, #e04826, #d7452c, #cd4230, #cb4a35, #c8513a, #c65840, #cb694b, #d07957, #d58964, #d99873)";

    }else{

        body.style.backgroundImage = "linear-gradient(to right bottom, #010326, #02052b, #020630, #020835, #01093a, #000b3e, #000d42, #010e46, #02104b, #04114f, #061354, #081459)";

    }
}

