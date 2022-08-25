function preco(){
    let preco_anterior = Number(window.prompt("Qual era o preço anterior do produto?"))
    let preco_atual = Number(window.prompt("Qual é o preço atual?"))
    let resultado = document.getElementById('res')
    let preco_mudou = Math.abs(preco_anterior - preco_atual)
    let variar = 0 
    if(preco_anterior < preco_atual){
        res.innerHTML += `<h2>Analisando os valores informados</h2>`
        res.innerHTML += `O preço custava R$${preco_anterior} e agora custa R$${preco_atual}.<br>`
        res.innerHTML += `Hoje o produto estar mais caro.<br>`
        res.innerHTML +=`O preço subiu de R$${preco_mudou} em relação ao preço anterior.<br>`
        res.innerHTML +=`Uma variação de ${variar}% para acima`

    }else{
        res.innerHTML +=`<h2>Analisando os valores informados</h2>`
        res.innerHTML +=`O preço custava R$${preco_anterior} e agora custa R$${preco_atual}.<br>`
        res.innerHTML +=`Hoje o produto estar mais barato.<br>`
        res.innerHTML +=`O preço baixou de R$${preco_mudou} em relação ao preço anterior><b>.`
        res.innerHTML +=`Uma variação de ${variar}% pra baixo.`
    }

    
    

}