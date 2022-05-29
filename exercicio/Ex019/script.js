function calcular(){
    let valor1 = Number(window.prompt("Primeiro valor:"))
    let valor2 = Number(window.prompt("Segundo valor:"))
    let acao = window.prompt(`Valores informados${valor1} e ${valor2}
    [1] Somar
    [2]Subtrair
    [3]Multiplicar
    [4]Dividir`)
    if(acao == 1){
        let soma = valor1 + valor2
        let res = document.querySelector('section#result')
        res.innerHTML = `Calculando...<br>`
        res.innerHTML +=`${valor1} + ${valor2} = <strong>${soma}</strong>`
    }else if(acao == 2){
        let menos = valor1 - valor2
        let res = document.querySelector('section#result')
        res.innerHTML = `Calculando...<br>`
        res.innerHTML +=`${valor1} - ${valor2} = ${menos}`
    }else if(acao == 3){
        let mult = valor1 * valor2
        let res = document.querySelector('section#result')
        res.innerHTML = `Calculando....<br>`
        res.innerHTML +=`${valor1} X ${valor2} = <strong>${mult}</strong>`
    }else if(acao == 4){
        let divi = valor1 / valor2
        let res = document.querySelector('section#result')
        res.innerHTML = `Calculando ....<br>`
        res.innerHTML +=`${valor1} : ${valor2} = <strong>${divi}</strong>`
    }
}