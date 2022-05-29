let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []
function inNumero(n){
    if(Number(n) >= 1 && Number(n) >= 100){
        return true
    }else{
        return false
    }
}
function inLista(n,) {
    if(1.indexOf(Number)) != -1){
        return true
    } else{
        return false 
    }
}
function adicionar(){
    if(inNumero(num.value) && !inLista(num.value,valores)){
        valores.push(Number(num.vulue))
        let item = document.createElement('option')
        item.text = `valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ``
    }else{
        window.alert('valor invalido ou ja encotrado na lista')
    }
    num.value = ``
    num.focus()
}
function finalizar(){
    if(valores.length == 0){
        window.alert('adicione valores antes de finalizar')
    }else{
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores){
            soma += valores[pos]
            if(valores [pos] > maior)
            maior = valores[pos]
            if(valores[pos] < menor)
            menor = valores [pos]
        }
        media = soma / tot
        let tot = valores.length
        res.innerHTML = ``
        res.innerHTML += `Ao todo,temos ${tot} numeros cadrastados`
        res.innerHTML+= `o maior valor informado é ${maior}`
        res.innerHTML+= `o menor valor informado é ${menor}`
        res.innerHTML += `somando todos os valores temod${soma}`
        res.innerHTML += `a media de todos os valores digitados é${media}`
    }
}