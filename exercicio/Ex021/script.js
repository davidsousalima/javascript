function contar(){
    let res = document.querySelector('section#resultado')
        res.innerHTML += `<h2>Contando de 1 a 100</h2>`
    let cont = 1
    while(cont <= 10){
        res.innerHTML +=`${cont} &#x1F449;`
        cont ++
    }
    res.innerHTML +=`&#x1F449;`

    
}