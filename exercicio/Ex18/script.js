 let palpite = 0
 let num = 0
function tentar(){
    let palpite = Number(window.prompt("Qual é o seu palpite?"))
    let min = 1
    let max = 100
    let ale = Math.random()
    let dif = min - 100
    let num = min + Math.trunc(dif*a)
    if (palpite > num){
        let res = document.querySelector('section#resultado')
        res.innerHTML = `Você falou ${palpite}.Meu numero e MAIOR!`
    
    }else if(palpite < num){
        let res = document.querySelector('section#resultado')
        res.innerHTML = `Você falou${palpite}.Meu número é MENOR!`
    }else if(palpite == num){
        let res = document.querySelector('section#resultado')
        res.innerHTML = `<strong>PARABÉNS!</strong> Você acertou!Eu tinha sorteado o valor${num}`
        document.getElementById('botao').style.visibility = 'hidden'
    }
}
