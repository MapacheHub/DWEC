const titulos = {
    1: 'El nombre de la rosa',
    2: 'Cien años de soledad',
    3: 'Fahrenheit 451',
};

const buscarLibro = (id) =>
new Promise((resolver, rechazar) => {
    setTimeout(() => {
        if (titulos[id]) resolver({ id, titulo: titulos[id] });
        else rechazar(new Error(`No existe ningún libro con id ${id}`));
    }, 500);
});

const segundosDesde = (inicio) => ((Date.now() - inicio) / 1000).toFixed(1);

let inicio = Date.now();
await buscarLibro(1);
await buscarLibro(2);
await buscarLibro(3);
console.log(`Uno detras de otra: ${segundosDesde(inicio)} s`);

inicio = Date.now();
const libros = await Promise.all([buscarLibro(1), buscarLibro(2), buscarLibro(3)]);
console.log(`Con Promise.all ${segundosDesde(inicio)} s`);


let cumplidas = 0;
let rechazadas = 0;

const resultados = await Promise.allSettled([buscarLibro(1), buscarLibro(99), buscarLibro(3)]);
for (const resultado of resultados) {
    if (resultado.status === 'fulfilled') {
        cumplidas++;
    } else {
        rechazadas++;
    }
}
console.log(`allSettled: ${cumplidas} cumplidas y ${rechazadas} rechazada`);