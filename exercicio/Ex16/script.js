function inicia(){
    let idade = Number(window.prompt('Em que ano você nasceu?'))
    let agora = new Date()
    let ano = agora.getFullYear()
    let calcula = ano - idade
    let res = document.querySelector('section#resul')
    res.innerHTML = `Quem nasceu em ${idade} vai completar ${calcula} anos em ${ano}.`
}