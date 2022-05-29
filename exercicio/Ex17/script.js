function zerar(){
    let zero = document.querySelector('section#resultado')
    zero.innerHTML = null
}
function iniciar(){
    let min = 1
    let max = 100
    let di = min - max
    let alear = Math.random()
    let num = min + Math.trunc(di*alear)
    let gerar = document.querySelector('section#resultado')
    gerar.innerHTML = `acabei de pensar no número<mark>${num}</mark><br>`

}