let number = prompt(`ingrese el numero que desea que sea multiplicado`)
let multiplicador = prompt(`ingrese el numero por el cual desea multiplicar el numero maximo es 10`)
if (number < 0) {
    console.log(`el numero que desea multiplicar es menor a 0 no se puede ejecutar`)
}
else if (multiplicador > 10) {
    console.log(`el numero por el cual desea multiplicar el numero es mayor a 10 no se puede ejecutar`)
} else {
    for (let i = 1; i <= multiplicador; i++) {
        let multiplicacion = number * i
        console.log(`${number} x ${i} = ${multiplicacion}`)
    }
}