function contar(){
    let saida = document.querySelector('section#saida')
    let n1 =Number( document.getElementById('fnu1').value)
    let n2 = Number(document.getElementById('fnu2').value)
    saida.innerHTML =`<h2>Contando de ${n1} ate ${n2}</h2>`
    let conta 
    if(n1<n2){
        let conta = 1
        while (conta >= n1 && conta <= n2){
        saida.innerHTML +=`${conta} &#x1F449;`
        conta++
        }
    }else if(n2<n1){
        conta = n1
        while (conta >= n2){
            saida.innerHTML +=`${conta} &#x1F449;`
            conta--
        }
    }else{
        saida.innerHTML += `Não é possivel contar,pois os números são iguais`
    }
   
    saida.innerHTML +=`&#x1F3C1;`
}
