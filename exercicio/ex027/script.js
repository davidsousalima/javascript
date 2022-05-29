function tabuada(){
    let num = Number(document.getElementById('fnum').value)
    let res = document.querySelector('section#saida')
    res.innerHTML =`<h3>Tabuada de ${num}</h3>`
    let cont = 1
    while(cont <=10){
        
        res.innerHTML+=`${num} X ${cont} = <strong>${num*cont}</strong><br>`
        cont++
    }
}