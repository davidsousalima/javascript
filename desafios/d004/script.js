function troco(){
    let produto = window.prompt("Que produto você está comprando?")
    let valor = Number(window.prompt(`quando custa ${produto} que você está comprando?`))
    let pago = Number(window.prompt(`Qual foi o valor que você deu para pagar ${produto}`))
    let res = valor-pago
    window.alert(`Você comprou${produto} que custa${valor}.Deu ${pago} em dinheiro e vai receber${res} de troco.Volte sempre!`)
}