//  1.  Function Declaration
//  creas la funcion y luego la usas
function calcularAreaRectangulo(ba, alt){
    console.log(ba * alt)
}


let base = 20
let altura = 30

calcularAreaRectangulo(base, altura)

//  2.   Function Expression
//  usas una funcion y luego la creas

calcularAreaTriangulo(base, altura)

function calcularAreaTriangulo(ba = 0, alt = 0){
    console.log((ba * alt) / 2)
}

//  3.  Arrow function
//  Arrow significa flecha (fuera bromas, fijate que aqui no creas una function, creas una variables a la que le asignas una funcion usando una flacha)

calcularAreaTriangulo = (ba = 0, alt = 0) => console.log((ba * alt) / 2)

//  4.

base = 40
altura = 60

//  5.

prueva1 = 10
prueva2 = 70

calcularAreaRectangulo(prueva1, prueva2)
calcularAreaTriangulo(prueva1, prueva2)