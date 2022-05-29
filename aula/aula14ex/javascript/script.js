function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
     var hora = data.getHours()
    msg.innerHTML = `agora são ${hora} horas`
    if (hora >= 0 && hora < 12){
        img.src = 'foto-amanha00.png'
        document.body.style.background ='#e2cd9f'
    } else if(hora >= 12 && hora < 18){
        img.src ='foto-tarde02.png'
        document.body.style.background ='#b9846f'
    }else{
        img.src = 'foto-noite01.png'
        document.body.style.background = '#515154'
    }

}
