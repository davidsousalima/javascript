function iniciar(){
    let medida = window.prompt("Digite uma distância em metros [m]")
    let km = medida/1000
    let hm = km*10
    let dam = hm*10
    let dm = dam*10
    let cm = dm*10
    let mm = cm*10
    let res = document.getElementById('resultado')
    res.innerHTML = `<h2>A distância de ${medida} metros, corresponde a.....</h2><br>`
    res.innerHTML +=`${km} quilômetros(KM)<br>`
    res.innerHTML+=`${hm} hectômetros(HM)<br>`
    res.innerHTML+=`${dam} decâmetros(DAM)<br>`
    res.innerHTML+=`${dm} decimetros(DM)<br>`
    res.innerHTML+=`${cm} centimetros (CM)<br>`
    res.innerHTML+=`${mm} milimetros(MM)`

}