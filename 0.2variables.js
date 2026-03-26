let tipo = prompt("en que vas a medir, en seg o en min")
if(tipo == "min"){
    let minutos = Number(prompt("ingrese los minutos"));
    if(minutos <= 0){
        console.log("no es numero valido para medir")
    }
    else{
    let seg = minutos * 60
    console.log("su medida en segundos es es" , seg)
    }
}
else if(tipo == "seg"){
     let seg = Number(prompt("ingrese el valor en seg"));
     if(seg <= 0){
        console.log("no es numero valido para medir")
     }
     else{
     let minutos = seg / 60
     console.log("su medida en minutos es" , minutos)
     }
}
else{
     console.log("el caracter no es correcto")
}



