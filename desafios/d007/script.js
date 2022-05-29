let valor = Number(window.prompt("Antes de mais nada.Quanto está  a cotação do dólar  agora?"))
function iniciar(){
    let reais = Number(window.prompt("Quantos R$ você tem na carteira?"))
    let resultado = reais/valor
    let res = document.querySelector('section#resultado')
    res.innerHTML=`Voce vai consegue comprar R$ ${resultado} dólares americanos`
}