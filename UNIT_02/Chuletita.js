// ================================================================
// push() y unshift()
// ================================================================
{
    let tareas = ["Ir de compras"];
    tareas.push("Ordenar"); // → 2 (devuelve la nueva longitud)
    tareas.unshift("Limpiar el baño"); // → 3 (desplaza los índices)
    tareas.push("Cortar el césped", "Regar"); // → 5 (acepta varios)
    console.log(tareas);
    // ["Limpiar el baño", "Ir de compras", "Ordenar", "Cortar el césped", "Regar"]
}


// ================================================================
// splice(x, y, z) [añadir datos]
// ================================================================
{
    let tareas = ["Limpiar el baño", "Ir de compras", "Ordenar", "Cortar el césped"];
    tareas.splice(
        2, // índice donde insertar
        0, // cuántos eliminar (0 = ninguno) (1 o mas, las siguientes posiciones)
        "Pintar el garaje", "Lavar el coche" // elemento(s) a insertar
    );

    console.log(tareas)
}


// ================================================================
// pop() y shift()
// ================================================================
{
    const tareas = ["Limpiar el baño", "Ir de compras", "Ordenar"];
    const ultima = tareas.pop(); // "Ordenar"
    const primera = tareas.shift(); // "Limpiar el baño"
    console.log(tareas); // ["Ir de compras"]
    [].pop(); // undefined (array vacío)
}

// ================================================================
// splice(x, y) [eliminar datos]
// ================================================================
{
    const tareas = ["Limpiar el baño", "Ir de compras", "Ordenar", "Cortar el césped"];
    const eliminadas = tareas.splice(1, 2);
    console.log(eliminadas); // ["Ir de compras", "Ordenar"]
    console.log(tareas); // ["Limpiar el baño", "Cortar el césped"]
    // Con más argumentos también sustituye: tareas.splice(1, 1, "Regar")
}

// ================================================================
// slice(x, y)
// ================================================================
{
    const tareas = ["Limpiar el baño", "Ir de compras", "Ordenar", "Cortar el césped"];
    const eliminadas = tareas.splice(1, 2);
    console.log(eliminadas); // ["Ir de compras", "Ordenar"]
    console.log(tareas); // ["Limpiar el baño", "Cortar el césped"]
    // Con más argumentos también sustituye: tareas.splice(1, 1, "Regar")
}

// ================================================================
// indices negativos
// ================================================================
{
    // tareas.slice(-2) => ["Ordenar", "Cortar el césped"]
    // tareas.slice(1, -1) => ["Ir de compras", "Ordenar"]
    // tareas.slice(1, -2) => ["Ir de compras"]
    // tareas.slice(1, -3) => []
}

// ================================================================
// reverse() y sort()
// ================================================================
{
    const nombres = ["Juan", "Marta", "Pedro"];
    nombres.reverse(); // ["Pedro", "Marta", "Juan"]

    const letras = ["c", "a", "b"];
    letras.sort(); // ["a", "b", "c"]

    const numeros = [10, 9, 1, 25];
    numeros.sort(); // [1, 10, 25, 9]
}

// ================================================================
// function [para comparar]
// ================================================================
{
    function comparar(a, b) {
        if (a < b) return -1; // a va antes
        if (a > b) return 1; // a va después
        return 0; // iguales
    }

    const valores = [7, 6, 4, 8, 7, 2, 4];
    valores.sort(comparar); // [2, 4, 4, 6, 7, 7, 8]
    // Versión corta con función flecha (ES6)
    valores.sort((a, b) => a - b); // ascendente
    valores.sort((a, b) => b - a); // descendente
    }

// ================================================================
// .localeCompare()
// ================================================================
{
    const contactos = [
        { nombre: "Juan", apellido: "Díaz", email: "juan@correo.es" },
        { nombre: "Ana", apellido: "Ruiz", email: "zeta@correo.es" },
        { nombre: "Pedro", apellido: "Álvarez", email: "pedro@correo.es" }
    ];

        const porNombre = (c1, c2) => c1.nombre.localeCompare(c2.nombre);
        const porApellido = (c1, c2) => c1.apellido.localeCompare(c2.apellido);
        contactos.sort(porNombre); // Ana, Juan, Pedro
        contactos.sort(porApellido); // Pedro (Álvarez), Juan (Díaz), Ana (Ruiz)
}

// ================================================================
// pila (LIFO) {push() mete, pop() saca}
// ================================================================
{
    const pila = [];
    pila.push(1);
    pila.push(2);
    pila.push(3);
    pila.pop(); // 3 → el último que entró
    // Uso real: el botón «Deshacer»

    const historial = [];
    historial.push("escribir texto");
    historial.push("poner negrita");
    historial.pop(); // deshace "poner negrita"
}

// ================================================================
// cola (FIFO) {push() mete, shift() saca}
// ================================================================
{
    const cola = [];
    cola.push("Cliente 1");
    cola.push("Cliente 2", "Cliente 3");
    cola.shift(); // "Cliente 1" → el primero que llegó
    cola.shift(); // "Cliente 2"
    console.log(cola); // ["Cliente 3"]
}

// ================================================================
// import y export
// ================================================================
{
    {
        pila.js
            /*export*/ const crearPila = () => {
                const elementos = []; // privado
                return {
                    apilar: (valor) => elementos.push(valor),
                    desapilar: () => elementos.pop(),
                    cima: () => elementos[elementos.length - 1],
                    estaVacia: () => elementos.length === 0
                };
            };
    }
    {
        app.js
            /*import*/ { crearPila } /*from*/ "./pila.js";
            const deshacer = crearPila();
            deshacer.apilar("escribir");
            deshacer.apilar("borrar");
            deshacer.desapilar(); // "borrar"
    }
}

// ================================================================
// indexOf() y lastIndexOf()
// ================================================================
{
    const transacciones = [-20, 500.5, -40, -34.5, 200, 500.5, -20, 200];
    transacciones.indexOf(200); // 4 (primera aparición)
    transacciones.lastIndexOf(200); // 7 (última aparición)
    transacciones.indexOf(200, 5); // 7 (empieza a buscar en el 5)
    transacciones.lastIndexOf(200, 5); // 4 (hacia atrás desde el 5)
    transacciones.indexOf(500); // -1 (no existe)
}

// ================================================================
// includes() y find()
// ================================================================
{
//includes() · ES2016 → devuelve true / false
    [4, 5, 6].includes(4); // true
    ["Ana", "Luis"].includes("Eva"); // false
    [4, 5, 6, 50].includes(6, 3); // false (busca desde el índice 3)

//find() · findIndex() · ES6 → reciben una función
    const numeros = [2, 3, 4, 5, 6, 7];
    const esImpar = (n) => n % 2 !== 0;
    numeros.find(esImpar); // 3 → el primer elemento que cumple
    numeros.findIndex(esImpar); // 1 → su índice
    numeros.find((n) => n > 10); // undefined si ninguno cumple
    numeros.findIndex((n) => n > 10); // -1
}

// ================================================================
// copyWithin(x, y, z)
// ================================================================
{
    const tareas = ["Limpiar el baño", "Ir de compras", "Ordenar", "Cortar el césped"];
    tareas.copyWithin(0, 2, 4);
    // pega en la posición 0 una copia de los índices 2 y 3 (el 4 no se incluye)
    console.log(tareas.length); // 4 → la longitud no cambia
}

// ================================================================
// toString(), toLocalesString() y join()
// ================================================================
{
    const datos = ["María", "Juan", 1234567.89];
    datos.toString(); // "María,Juan,1234567.89"
    datos.toLocaleString("es-ES"); // "María,Juan,1.234.567,89"
    datos.toLocaleString("en-US"); // "María,Juan,1,234,567.89"
    datos.join(" - "); // "María - Juan - 1234567.89"
    `Datos: ${datos}`; // plantilla ES6: usa toString()
}

// ================================================================
// ================================================================
// borrar en medio de un array [delete]
// ================================================================
// ================================================================
{
    const frase = ['voy', 'a', 'casa'];
    delete frase[1]; // borra 'a'
    console.log(frase[1]); // undefined
    console.log(frase); // ['voy', <vacío>, 'casa']
    console.log(frase.length); // 3
}


// ================================================================
// Eliminar, reemplazar y recoger
// ================================================================
{
    // 1) Eliminar: desde el índice 1, borra 1 elemento
    const lenguaje = ['Yo', 'estudio', 'JavaScript'];
    lenguaje.splice(1, 1);
    console.log(lenguaje); // ['Yo', 'JavaScript']

    // 2) Reemplazar: borra los 3 primeros e inserta 2 nuevos
    const frase = ['Yo', 'estudio', 'JavaScript', 'ahora', 'mismo'];
    frase.splice(0, 3, 'a', 'bailar');
    console.log(frase); // ['a', 'bailar', 'ahora', 'mismo']

    // 3) Recoger lo eliminado: splice devuelve un array
    const otra = ['Yo', 'estudio', 'JavaScript', 'ahora', 'mismo'];
    const eliminados = otra.splice(0, 2);
    console.log(eliminados); // ['Yo', 'estudio']
}

// ================================================================
// Insertar sin borrar e indices negativos
// ================================================================
{
    //cantidadABorrar = 0 → solo inserta
    const palabras = ['Yo', 'estudio', 'JavaScript'];
    // desde el índice 2, borra 0 e inserta 3 elementos
    palabras.splice(2, 0, 'el', 'complejo', 'lenguaje');
    console.log(palabras); // ['Yo', 'estudio', 'el', 'complejo', 'lenguaje', 'JavaScript']

    //Índices negativos: se cuentan desde el final
    const numeros = [1, 2, 5];
    // desde -1 (una posición antes del final),
    // borra 0 e inserta 3 y 4
    numeros.splice(-1, 0, 3, 4);
    console.log(numeros); // [1, 2, 3, 4, 5]
}

// ================================================================
// Slice(inicio, fin): copiar un trozo sin tocar el original
// concat(a, b): junta 2 cosas
// ================================================================
{
    const letras = ['t', 'e', 's', 't'];
    console.log(letras.slice(1, 3)); // ['e', 's']
    console.log(letras.slice(-2)); // ['s', 't']
    const copia = letras.slice(); // copia completa
    copia.push('!');
    console.log(letras); // ['t', 'e', 's', 't'] intacto
}
{
    // Esto es teorico porque no havia nada en el temario
    // concat("hola", "mundo") => "hola mundo"
    // concat([1, 2, 3], [a, b, c]) => [1, 2, 3, a, b, c]
}

// ================================================================
// forEach()
// ================================================================
{
    const personajes = ['Bilbo', 'Gandalf', 'Nazgul'];
    // Solo necesitamos el elemento
    personajes.forEach((personaje) => console.log(personaje));
    // Con el índice y el array completo
    personajes.forEach((personaje, indice, lista) => {
    console.log(`${personaje} está en la posición ${indice} de [${lista}]`);
    });
    // Bilbo está en la posición 0 de [Bilbo,Gandalf,Nazgul] …
}

// ================================================================
// indexOf, lastIndexOf() e includes
// ================================================================
{
    const valores = [1, 0, false];
    console.log(valores.indexOf(0)); // 1
    console.log(valores.indexOf(false)); // 2 (usa ===)
    console.log(valores.indexOf(null)); // -1
    console.log(valores.includes(1)); // true

    const frutas = ['Manzana', 'Naranja', 'Manzana'];
    console.log(frutas.indexOf('Manzana')); // 0
    console.log(frutas.lastIndexOf('Manzana')); // 2

    const raros = [NaN];
    console.log(raros.indexOf(NaN)); // -1 (fallo)
    console.log(raros.includes(NaN)); // true (bien)
}

// ================================================================
// find((elemento) => condicion), findIndex() y findLastIndex()
// ================================================================
{
    const usuarios = [
        { id: 1, nombre: 'Celina' },
        { id: 2, nombre: 'David' },
        { id: 3, nombre: 'Federico' },
        { id: 4, nombre: 'Celina' },
    ];

    const usuario = usuarios.find((u) => u.id === 1);
    console.log(usuario.nombre); // 'Celina'
    console.log(usuarios.find((u) => u.id === 9)); // undefined

    const esCelina = (u) => u.nombre === 'Celina';
    console.log(usuarios.findIndex(esCelina)); // 0
    console.log(usuarios.findLastIndex(esCelina)); // 3
}

// ================================================================
// find() vs filter()
// ================================================================
{
    const puntos = [4, 9, 12, 7, 15];
    const primero = puntos.find((n) => n > 8); // 9
    const todos = puntos.filter((n) => n > 8); // [9, 12, 15]
    const ninguno = puntos.filter((n) => n > 99); // [] (array vacío)
}

// ================================================================
// map()
// ================================================================
{
    // (nombre) => nombre.length

    const personajes = ['Bilbo', 'Gandalf', 'Nazgul'];
    const longitudes = personajes.map((nombre) => nombre.length);
    console.log(longitudes); // [5, 7, 6]

    const precios = [10, 20, 30];
    const conIva = precios.map((precio) => precio * 1.21);
    console.log(conIva); // [12.1, 24.2, 36.3]
}

// ================================================================
// sort()
// ================================================================
{
    // [1, 2, 15].sort() → [1, 15, 2] ¿?
    // .sort() convierte los nuemros a string, y luego los organiza de forma lexicografico
    // 
    // Devuelve         | Resultado
    // true / positivo  | b va antes que a
    // false / negativo | a va antes que b
    //        0         | son iguales
    // 
    //                                                  recuerda !   a - b => menor a mayor      b - a => mayor a menor

    const numeros = [1, 2, 15];

    // Versión larga
    numeros.sort(function (a, b) {
        if (a > b) return 1;
        if (a === b) return 0;
        return -1;
    });

    // Versión corta con función flecha
    numeros.sort((a, b) => a - b); // [1, 2, 15]
    numeros.sort((a, b) => b - a); // [15, 2, 1]


    str.localeCompare
    const paises = ['Österreich', 'Andorra', 'Vietnam'];

    // Compara códigos de carácter: incorrecto
    paises.sort((a, b) => (a > b ? 1 : -1));
    // ['Andorra', 'Vietnam', 'Österreich']

    // Compara según el idioma: correcto
    paises.sort((a, b) => a.localeCompare(b));
    // ['Andorra', 'Österreich', 'Vietnam']


    arr.reverse()

    const cuenta = [1, 2, 3, 4, 5];

    cuenta.reverse();

    console.log(cuenta);
    // [5, 4, 3, 2, 1]

    // sort y reverse modifican el array y además lo devuelven. Para no perder el original: [...numeros].sort(...)
    }

// ================================================================
// split() y join()
// ================================================================
{
    const destinatarios = 'Ana, Luis, Eva';
    const lista = destinatarios.split(', ');

    for (const nombre of lista) {
        console.log(`Un mensaje para ${nombre}.`);
    }

    console.log('a, b, c, d'.split(', ', 2)); // ['a', 'b'] (límite)
    console.log('test'.split('')); // ['t', 'e', 's', 't']
    console.log(lista.join(';')); // 'Ana;Luis;Eva'
}

// ================================================================
// reduce() [y reduceRight()]
// ================================================================
{
    // arr.reduce((acumulador, elemento, indice, array) => …, valorInicial)

    let numeros = [1, 2, 3, 4, 5];
    const total = numeros.reduce((suma, actual) => suma + actual, 0);
    console.log(total); // 15


    let numeros2 = [1, 2, 3, 4, 5];
    numeros2.reduce((suma, actual) => suma + actual); // 15: empieza con el 1

    const vacio = [];
    vacio.reduce((suma, actual) => suma + actual);
    // TypeError: Reduce of empty array with no initial value
    vacio.reduce((suma, actual) => suma + actual, 0); // 0

    // reduceRight: igual, pero de derecha a izquierda
    ['a', 'b', 'c'].reduceRight((texto, letra) => texto + letra, ''); // 'cba'

    // Especifica siempre el valor inicial. Sin él, reduce usa el primer elemento y, si el array está vacío, lanza un error.
}

// ================================================================
// typeof  o  Array.isArray()
// ================================================================
{
    console.log(typeof {}); // 'object'
    console.log(typeof []); // 'object' (¡igual!)

    console.log(Array.isArray({})); // false
    console.log(Array.isArray([])); // true
}

// ================================================================
// .cosa(... thisArg) [thisArg se usa poco: una función flecha hace lo mismo de forma más clara.]
// ================================================================
{
    const ejercito = {
        edadMinima: 18,
        edadMaxima: 27,
        puedeUnirse(recluta) {
            return recluta.edad >= this.edadMinima &&
            recluta.edad < this.edadMaxima;
        },
    };
    const reclutas = [{ edad: 16 }, { edad: 20 }, { edad: 30 }];

    reclutas.filter(ejercito.puedeUnirse, ejercito); // [{ edad: 20 }]
    // Equivalente y más habitual:
    reclutas.filter((r) => ejercito.puedeUnirse(r));
    // Sin thisArg: this sería undefined → error
}

// ================================================================
// some() / every()
// ================================================================
{
    // some / every: ¿alguno? ¿todos?

    const edades = [12, 17, 25];
    edades.some((e) => e >= 18); // true
    edades.every((e) => e >= 18); // false
}

// ================================================================
// fill()
// ================================================================
{
    // fill(valor, inicio, fin)

    new Array(3).fill(0); // [0, 0, 0]
    [1, 2, 3, 4].fill(9, 1, 3); // [1, 9, 9, 4]
}

// ejemplo de uso
// new Array(n).fill('■'), 
// crear un nuevo array y rellenarlo de "cubos"

// ================================================================
// every() [para comparar arrays]
// ================================================================
{
    // every para comparar arrays

    const sonIguales = (a, b) =>
    a.length === b.length &&
    a.every((valor, i) => valor === b[i]);
    sonIguales([1, 2], [1, 2]); // true
}

// ================================================================
// flat() / flatMap()
// ================================================================
{
    // flat(profundidad) / flatMap(fn)

    [1, [2, [3, [4]]]].flat(); // [1, 2, [3, [4]]]
    [1, [2, [3, [4]]]].flat(Infinity); // [1, 2, 3, 4]
    ['hola mundo'].flatMap((f) => f.split(' '));
    // ['hola', 'mundo']
}

// ================================================================
// utilidades
// ================================================================
{
    {// utilidades/arrays.js
        //export const sumar = (numeros) => numeros.reduce((total, n) => total + n, 0);

        //export const media = (numeros) => numeros.length === 0 ? 0 : sumar(numeros) / numeros.length;

        //export const aprobados = (notas) => notas.filter((nota) => nota >= 5);

        //export const ordenar = (numeros) => [...numeros].sort((a, b) => a - b);
    }

    {// main.js
        //import { media, aprobados, ordenar }
        //from './utilidades/arrays.js';

        const notas = [7, 4.5, 9, 3, 6];

        console.log(media(notas)); // 5.9
        console.log(aprobados(notas)); // [7, 9, 6]
        console.log(ordenar(notas)); // [3, 4.5, 6, 7, 9]
        console.log(notas); // sin cambios

        // En index.html:
        // <script type="module" src="main.js"></script>
    }
}

// ================================================================
// spread
// ================================================================
{
    //  ? ? ? ?
}

// ================================================================
// toLowerCase
// ================================================================
{
    //  pasarlo a minusculas, duhu?!?!
}

// ================================================================
// Chuleta de métodos de arrays
// Método  |  Qué hace
// ================================================================
// 
// push(...items)           | Añade al final (muta)
// pop()                    | Quita el último (muta)
// shift()                  | Quita el primero (muta)
// unshift(...items)        | Añade al inicio (muta)
// splice(i, n, ...)        | Borra e inserta (muta)
// slice(inicio, fin)       | Copia un trozo
// concat(...items)         | Une en un array nuevo
// forEach(fn)              | Recorre, no devuelve nada
// indexOf / includes       | Posición / true o false
// find / findIndex         | Primer elemento / índice
// filter(fn)               | Todos los que cumplen
// Método                   | Qué hace
// map(fn)                  | Transforma cada elemento
// sort(fn)                 | Ordena (muta)
// reverse()                | Invierte (muta)
// split / join             | String ↔ array
// reduce(fn, inicial)      | Calcula un único valor
// Array.isArray(v)         | ¿Es un array?
// some / every             | ¿Alguno? / ¿Todos?
// fill(valor)              | Rellena (muta)
// flat / flatMap           | Aplana arrays anidados

// Number, 

// { ...objeto }, 
