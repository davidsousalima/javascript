function contar(){
    let res = document.querySelector('section#resultado')
    res.innerHTML = `<h2>Contagem Regressiva de 10 até 1</h2>`
    let num = 10
    while(num >=1){
        res.innerHTML +=`<strong>${num}</strong>&#x1F449;`
        num --
    }
    res.innerHTML +=`&#x1F3C1;`
}