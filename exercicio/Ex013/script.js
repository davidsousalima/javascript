function maior(){
    let num1 = Number(window.prompt("Digite um número:"))
    let num2 = Number(window.prompt("Digite outro número:"))
    if(num1 > num2){
        let res = document.querySelector('section#resultado')
        res.innerHTML = `Analisando os valores <mark>${num1}</mark> e <mark>${num2}</mark>, o maior valor é ${num1}.`
    }else{
        let res = document.querySelector('section#resultado')
        res.innerHTML = `Analisando os valores <mark>${num1}</mark> e <mark>${num2}</mark>, o maior valor é ${num2}`
    }
}