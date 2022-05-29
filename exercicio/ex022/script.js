function contar(){
    let res = document.querySelector('section#resultado')
    res.innerHTML = `<h2>Contando de 1 até 10,marcando os pares</h2>`
    let num = 1
    while( num <= 10){
        if(num % 2 == 0){
            res.innerHTML +=`<mark>${num}</mark> &#x1F449;`
        }else{
            res.innerHTML +=`${num} &#x1F449;`
        }
        num ++
    } res.innerHTML +=`&#x1F3C1;`
}