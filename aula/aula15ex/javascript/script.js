function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('div#res')
    if (fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente')
    }else {
        var fsex = document.getElementsByTagName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            genero = 'homem'
            if(idade >=0 && idade <10){
                //crianca
                img.setAttribute('src','foto-crianca-h.png')
            }else if(idade <21){
                //jovem
                img.setAttribute('src','foto-jovem-h.png')
            }else if(idade < 50){
                //adulto
                img.setAttribute('src','foto-adulto-h.png')
            }else{
                //idoso
                img.setAttribute('src','foto-idoso-h.png')
            }
        }else if(fsex[1].checked){
            genero = 'mulher'
            if(idade >=0 && idade <10){
                //crianca
                img.setAttribute('src','foto-crianca-m.png')
            }else if(idade <21){
                //jovem
                img.setAttribute('src','foto-jovem-m.png')
            }else if(idade < 50){
                //adulto
                img.setAttribute('src','foto-adulto-m.png')
            }else{
                //idoso
                img.setAttribute('src','foto-idoso-m.png')
            }
        }
        res.style.textAlign ='center'
        res.innerHTML = `${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}