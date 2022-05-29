function iniciar(){
    let num = Number(window.prompt('Digite um número:'))
    let msg = num % 2
    if(msg ==1){
        let res = document.querySelector('section#result')
        res.innerHTML = `O numero ${num} que foi digitado e ÍMPAR!!`
    }else if(msg==0){
        let res = document.querySelector('section#result')
        res.innerHTML = `O número ${num} que foi digitado é PAR!`
    }
}