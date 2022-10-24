//cheats
// 0 = Pedra
// 1 = Papel
// 2 = tesoura

//const

const btnPedra   = document.getElementById("pedra");
const btnPapel   = document.getElementById("papel");
const btnTesoura = document.getElementById("tesoura");
const player     = document.getElementById("player");
const computador = document.getElementById("computador");

const pedraImg   = document.getElementById("pedraImg");
const papelImg   = document.getElementById("papelImg");
const tesouraImg = document.getElementById("tesouraImg");

const pedraPc   = document.getElementById("pedraPc");
const papelPc   = document.getElementById("papelPc");
const tesouraPc = document.getElementById("tesouraPc");



let playersc     = 0;
let computadorsc = 0;


//numero aleatório
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
};
function finalRandomNum(){
    console.log(getRandomInt(3));
};
//function
const fPedra   = function(){
    const pedra = 0;
    const numaleat = getRandomInt(3);
    if(numaleat == 2){
        player.innerHTML = ++ playersc;
        setTimeout(function(){
            pedraImg.style.visibility = "visible";
          },1);
        setTimeout(function(){
            pedraImg.style.visibility = "hidden";
          },3000);
        setTimeout(function(){
            tesouraPc.style.visibility = "visible";
          },1);
        setTimeout(function(){
            tesouraPc.style.visibility = "hidden";
          },3000);
        console.log("player venceu");
    }else if (pedra == numaleat){
        setTimeout(function(){
            pedraImg.style.visibility = "visible";
          },1);
        setTimeout(function(){
            pedraImg.style.visibility = "hidden";
          },3000);
        setTimeout(function(){
            pedraPc.style.visibility = "visible";
          },1);
        setTimeout(function(){
            pedraPc.style.visibility = "hidden";
          },3000);
    }else {
        computador.innerHTML = ++ computadorsc;
        setTimeout(function(){
            pedraImg.style.visibility = "visible";
          },1);
        setTimeout(function(){
            pedraImg.style.visibility = "hidden";
          },3000);
        setTimeout(function(){
            papelPc.style.visibility = "visible";
          },1);
        setTimeout(function(){
            papelPc.style.visibility = "hidden";
          },3000);
        console.log("computador venceu");
    }
};
const fPapel   = function(){
    const papel = 1;
    const numaleat = getRandomInt(3);
    if(numaleat == 0){
        player.innerHTML = ++ playersc;
        setTimeout(function(){
            papelImg.style.visibility = "visible";
          },1);
        setTimeout(function(){
            papelImg.style.visibility = "hidden";
          },3000);
        setTimeout(function(){
            pedraPc.style.visibility = "visible";
          },1);
        setTimeout(function(){
            pedraPc.style.visibility = "hidden";
          },3000);
        console.log("player venceu");
    }else if (papel == numaleat){
        setTimeout(function(){
            papelImg.style.visibility = "visible";
          },1);
        setTimeout(function(){
            papelImg.style.visibility = "hidden";
          },3000);
        setTimeout(function(){
            papelPc.style.visibility = "visible";
          },1);
        setTimeout(function(){
            papelPc.style.visibility = "hidden";
          },3000);
    }else {
        computador.innerHTML = ++ computadorsc;
        setTimeout(function(){
            papelImg.style.visibility = "visible";
          },1);
        setTimeout(function(){
            papelImg.style.visibility = "hidden";
          },3000);
        setTimeout(function(){
            tesouraPc.style.visibility = "visible";
          },1);
        setTimeout(function(){
            tesouraPc.style.visibility = "hidden";
          },3000);
        console.log("computador venceu");
    };
};

const fTesoura   = function(){
    const tesoura = 2;
    const numaleat = getRandomInt(3);
    if(numaleat == 1){
        player.innerHTML = ++ playersc;
        setTimeout(function(){
            tesouraImg.style.visibility = "visible";
          },1);
        setTimeout(function(){
            tesouraImg.style.visibility = "hidden";
          },3000);
        setTimeout(function(){
            papelPc.style.visibility = "visible";
          },1);
        setTimeout(function(){
            papelPc.style.visibility = "hidden";
          },3000);
        console.log("player venceu");
    }else if(tesoura == numaleat){
        setTimeout(function(){
            tesouraImg.style.visibility = "visible";
          },1);
        setTimeout(function(){
            tesouraImg.style.visibility = "hidden";
          },3000);
        setTimeout(function(){
            tesouraPc.style.visibility = "visible";
          },1);
        setTimeout(function(){
            tesouraPc.style.visibility = "hidden";
          },3000);
    }else {
        computador.innerHTML = ++ computadorsc;
        setTimeout(function(){
            tesouraImg.style.visibility = "visible";
          },1);
        setTimeout(function(){
            tesouraImg.style.visibility = "hidden";
          },3000);
        setTimeout(function(){
            pedraPc.style.visibility = "visible";
          },1);
        setTimeout(function(){
            pedraPc.style.visibility = "hidden";
          },3000);
        console.log("computador venceu");
    };
};

//moviments
btnPedra.addEventListener("click", fPedra);
btnPapel.addEventListener("click", fPapel);
btnTesoura.addEventListener("click", fTesoura);