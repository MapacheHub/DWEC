1.
Inicio  Dentro del try 1    Capturado: error.name   Limpieza    Fin

No llega a ejecutarse   Dentro del try 2    , y aparece     Fin     porque esta fuera del try, del catch y del finaly, por lo que no deberia de haber nada que evite que salga

Inicio  Dentro del try 1    0   Dentro del try 2    Limpieza    Fin     Si, sigue ejecutandose el finally.


3.
Son validos el 4º y el 5º
en el 1º estas diciendo que "nombre" tiene de valor Ana (sobran las comillas)
en el 2º estas diciendo que 'nombre' tiene de valor Luis (sobran als comillas)
en el 3º estas diciendo que "activo" es verdadero (sobran las comillas)
en el 6º esta diciendo que "curso" tiene de valor 2DAW (sobran las comillas)


4.
No aparece apodo porque es "undefined"
Al convertir el objeto en texto y luevo volver a convertirlo a objeto obiamente no se guarta el tipo.


6.

En el A no cambia
En el B no cambia
En el C no cambia

Porque superficial es un copia de la lista original, al intentar sobre-escribir el propietario no se queda, pero como no intenteas sobre-escribir usuarios, sino que añades, eso si se queda

Usaria la copia igual


7.

1. Salgo de casa    3. Cojo el carro    6. Hago la lista    4. Pago en caja (0 ms)  2. LLego al supermercado (500 ms)   5. Vuelvo a casa (1000 ms)
1. Salgo de casa    3. Cojo el carro    6. Hago la lista    2. LLego al supermercado (500 ms)   5. Vuelvo a casa (1000 ms)  4. Pago en caja (1500 ms)

Porque al definir timeout ya le estas diciendo que tiene que pasar x tiempo antes de ejecutarse, de normal el codigo va de arriba a abajo sin parar, asi que al añadir que espere 0ms espera que se ejecute todo el codigo (porque no tiene que esperar ninguna cantidad de tiempo) y luego ya se ejecuta el comando de 0ms


8.

Por como esta posicionado el codigo, primero se ejecuta la "consulta enviada" y luego se verifica todo