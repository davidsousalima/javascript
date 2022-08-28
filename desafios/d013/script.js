function verificar(){
    let res = document.getElementById('saida')
    let nome = window.prompt("Qual é o nome do aluno?")
    let primeira_nota = window.prompt(`Primeira nota de ${nome}:`)
    let segunda_nota = window.prompt(`Segunda nota de ${nome}: `)
    let media = (primeira_nota + segunda_nota)/2
    if(media >= 6){
        res.innerHTML += `<h2>Analisando a situação de ${nome}</h2>`
        res.innerHTML += `<p>Com as notas ${primeira_nota} e ${segunda_nota} a média e ${media}</p>`
        res.innerHTML += `<p>Com a media acima de 6,0 o aluno está <mark id='verd'>APROVADO</mark></p>`
    }else {
        if(media >= 3 && media < 6){
            res.innerHTML += `<h2>Analisando a situação de ${nome}</h2>`
            res.innerHTML += `<p>Com as notas ${primeira_nota} e ${segunda_nota} a média e ${media}</p>`
            res.innerHTML += `<p>Com a média entre 3,0 e 6,0 o aluno está em <mark id='amar'>RECUPERAÇÂO</mark></p>`
        }else{
            res.innerHTML += `<h2>Analisando a situação de ${nome}</h2>`
            res.innerHTML += `<p>Com a as notas ${primeira_nota} e ${segunda_nota} a média e ${media}</p>`
            res.innerHTML +=`<p>Com as notas abaixo de 6,0 o aluno esta <div id='verm'>REPROVADO</div></p>`
        }
        

    }
}