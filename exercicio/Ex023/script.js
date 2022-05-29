function contar(){
    let res = document.querySelector('section#saida')
    res.innerHTML = `<h2>Números pares de 1 a até 10</h2>`
    let num =2
    while(num <=10){
        res.innerHTML +=`${num}&#x1F449;`
        num += 2
    }
    res.innerHTML +=`&#x1F3C1;`

}