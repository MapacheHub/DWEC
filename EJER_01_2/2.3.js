//  1.

let saldo = 1000
let retirar = 50
let tieneTarjetaCredito = true

function saldoARetirar(tot = 0, saca = 0, credito) {

    //  5.
    if (tot < saca || credito === true) {
        console.log("Saldo insuficiente, pagando con tarjeta de credito")
    } else {
        //  2.

        if(tot >= saca){
            //  3.

            console.log("Retiro exitoso. Saldo restante: " + (tot - saca))
        } else{

            //  4.
            console.log("Saldo insuficiente")
        }
    }
}

saldoARetirar(saldo, retirar)