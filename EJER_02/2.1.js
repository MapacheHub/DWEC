// 1.
let numeros = [1, 2, 3, 4, 5, 6]

//    2.    creamos dobles basandose en la "edicion"(.map) de numeros, para ello creamos una funcion[que cojera cada dato en el arra y lo metera en "num"]
let dobles = numeros.map(function(num) {
     return num + num
}
)

//  3.
let pares = numeros.filter(function(par) {
    if(par % 2 == 0) {
        return par
    }
})

//  4.
for(let nume of pares) {
    console.log(nume)
}
