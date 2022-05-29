function clicar(){
    let data = new Date
    let res = document.querySelector('section#resultado')
    res.innerHTML = `O que eu recebi do sistema foi <mark>${data}</mark>`
}