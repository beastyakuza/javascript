let tipo = prompt("en que vas a medir, en km o en m")
if(tipo == "m"){
    let metros = Number(prompt("ingrese los metros"));
    if(metros <= 0){
        console.log("no es numero valido para medir")
    }
    else{
    let km = metros / 1000
    console.log("su medida en km es" , km)
    }
}
else if(tipo == "km"){
     let km = parseFloat(prompt("ingrese el valor en km"));
     if(km <= 0){
        console.log("no es numero valido para medir")
     }
     else{
     let metros = km * 1000
     console.log("su medida en m es" , metros)
     }
}
else{
     console.log("el caracter no es correcto")
}







