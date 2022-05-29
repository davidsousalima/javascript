function iniciar(){
    let agora = new Date()
    let dia = agora.getDate()
    let mes = agora.getMonth()
    let ano = agora.getFullYear()
    let semana = agora.getDay()
    let hora = agora.getHours()
    let minuto = agora.getMinutes()
    let segundo = agora.getSeconds()
    let res = document.querySelector
    ('section#resultad')
    res.innerHTML = `<p>Dia:<mark>${dia}</mark></p>`
    if (mes==0){
        res.innerHTML += `Mês:<mark>Janeiro<mark/><br>`
    }else if(mes==1){
        res.innerHTML += `Mês:<mark>Fevereiro<mark/><br>`
    }else if(mes==2){
        res.innerHTML +=`Mês:<mark>Março<mark/><br>`
    }else if(mes==3){
        res.innerHTML+=`Mês:<mark>Abril<mark/><br>`
    }else if(mes==4){
        res.innerHTML += `Mês:<mark>Maio<mark/><br>`
    }else if(mes==5){
        res.innerHTML += `Mês:<mark>Junho<mark/><br>`
    }else if(mes==6){
        res.innerHTML += `Mês:<mark>Julho<mark/><br>`
    }else if(mes==7){
        res.innerHTML += `Mês:<mark>Agosto<mark/><br>`
    }else if(mes==8){
        res.innerHTML += `Mês:<mark>Setembro<mark/><br>`
    }else if(mes==9){
        res.innerHTML += `Mês:<mark>Outombro<mark/><br>`
    }else if(mes==10){
        res.innerHTML += `Mês:<mark>Novembro<mark/><br>`
    }else if(mes==11){
        res.innerHTML += `Mês:<mark>Dezembro<mark/><br>`
    }
    res.innerHTML +=`Ano:<mark>${ano}</mark><br>`
    if(semana==0){
        res.innerHTML +=`Dia da semana:<mark>Domingo<br></mark>`
    }else if(semana==1){
        res.innerHTML +=`Dia da semana:<mark>Segunda</mark><br>`
    }else if(semana==2){
        res.innerHTML +=`Dia da semana:<mark>Terça</mark><br>`
    }else if(semana==3){
        res.innerHTML +=`Dia da semana:<mark>Quarta</mark><br>`
    }else if(semana==4){
        res.innerHTML +=`Dia da semana:<mark>Quinta</mark><br>`
    }else if(semana==5){
        res.innerHTML +=`Dia da semana:<mark>Sexta</mark><br>`
    }else if(semana==6){
        res.innerHTML +=`Dia da semana:<mark>Sábado</mark><br>`
    }
    res.innerHTML += `Hora:<mark>${hora}</mark><br>`
    res.innerHTML += `Minutos:<mark>${minuto}</mark><br>`
    res.innerHTML +=`Segundos:<mark>${segundo}</mark>`
    
}