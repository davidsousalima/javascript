function calcular(){
    let A = Number(window.prompt('Qual e o valor de a?'))
    let B = Number(window.prompt("Qual e o valor de b?"))
    let C = Number(window.prompt("Qual é o valor de c?"))
    let saida = document.querySelector('section#res')
    saida.innerHTML = `<h2>Resolvendo Bhaskara</h2>`
    saida.innerHTML +=`A equção atual é <strong>${A}x<sup>2</sup> + ${B}x +${C} = 0</strong><br>`
    saida.innerHTML +=`O calculo realizado sera <strong>&Delta; = ${B}<sup>2</sup> - 4 .${A}.${C}</strong><br>`
    let g = (B**2)-(4*A*C)
    saida.innerHTML+=`O valor calculado foi <mark>&Delta; =${g} </mark>`
}