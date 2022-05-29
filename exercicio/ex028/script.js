function fatorial(){
    let n = Number(document.getElementById('fnum').value)
    let saida = document.querySelector('section#saida')
    saida.innerHTML = `<h2>Calculando${n}!</h2>`
    let c = n
    let fat = 1
    while(c > 1){
        saida.innerHTML +=`${c}x`
        fat *= c
        c--
    }
    saida.innerHTML +=`<strong>${fat.toLocaleString('pt-BR')}</strong>`
    
}