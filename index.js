
let body = document.querySelector("#corpo")
var data = new Date
var hora = data.getHours()
let jogo1 = document.querySelector("#jogo1")
let jogo2 = document.querySelector("#jogo2")


function carregar(){
    if (hora > 0 && hora <= 6){

        body.style.backgroundImage = "linear-gradient(to right bottom, #012030, #003b4e, #00586a, #007884, #0d989a, #33aca3, #51bfaa, #6fd3b0, #8bdeb1, #a5e9b2, #c0f3b5, #dafdba)";

    }else if(hora > 6 && hora <= 12){

        body.style.backgroundImage = "linear-gradient(to right bottom, #016a6d, #1f7d69, #4b8d5c, #7c9a4d, #b2a245, #b6a547, #bba849, #bfab4b, #90ab56, #63a66b, #3a9d80, #1b9290)";

    }else if (hora > 12 && hora < 18){

        body.style.backgroundImage = "linear-gradient(to left top, #f25116, #e94c1f, #e04826, #d7452c, #cd4230, #cb4a35, #c8513a, #c65840, #cb694b, #d07957, #d58964, #d99873)";
        

    }else{

        body.style.backgroundImage = "linear-gradient(to right bottom, #010326, #02052b, #020630, #020835, #01093a, #000b3e, #000d42, #010e46, #02104b, #04114f, #061354, #081459)";
        jogo1.style.color = 'white'
        jogo2.style.color = 'white'
    }
}