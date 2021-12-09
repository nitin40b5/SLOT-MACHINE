let value1 = document.getElementById('value1')
let value2 = document.getElementById('value2')
let value3 = document.getElementById('value3')
let btnstop = document.getElementById('btnstop')
let inpnum = document.getElementById('inpnum')
let btnstart = document.getElementById('btnstart')
let logo = document.getElementById('logo')

let value = ['😂','😇','🥰','😗','😁','😃','🥳','😆','🥲']

function getrandom(){
    return value[parseInt(Math.random()*9)];
}

let animationId

function changeanimation(newspeed){
    if(animationId) clearInterval(animationId)
        animationId = setInterval(function(){
            value1.innerText = getrandom();
            value2.innerText = getrandom();
            value3.innerText = getrandom();
        },1000/newspeed)
}

btnstop.onclick = function(){
    clearInterval(animationId)
    document.documentElement.style.setProperty('--speed',0)
    if(value1.innerText == value2.innerText && value2.innerText == value3.innerText){
        logo.innerText = 'YOU WON 🥳'
    }
    else{
         logo.innerText = 'YOU LOSE 🥲'
    }
}

inpnum.onchange = function(eve){
    document.documentElement.style.setProperty('--speed',eve.target.value)
    changeanimation(eve.target.value);
    logo.innerText = 'SLOT MACHINE'
}

btnstart.onclick = function(){
        document.documentElement.style.setProperty('--speed',inpnum.value)
        changeanimation(inpnum.value);
        logo.innerText = 'SLOT MACHINE'
}

