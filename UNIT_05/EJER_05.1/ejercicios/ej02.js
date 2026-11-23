const operaciones = [[10, 2], [5, 0], [7, 4]];

const comprobarCero = (numero) => {
    if (numero === 0) throw new RangeError;
}

function dividir(a, b){
    try {
        comprobarCero(b);
        return console.log (a + " / " + b + " = " + a / b);
    } catch(error) {
        console.log(`${error.name}: No se puede dividir entre cero`)
    } finally {
        console.log("Operacion terminada")
    }
}

for (const numeros of operaciones){
    dividir(numeros[0], numeros[1])
}