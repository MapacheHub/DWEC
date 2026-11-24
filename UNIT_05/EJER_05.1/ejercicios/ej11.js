const textoIds = '[3, 1, 99, 2]';

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

// 1.
let ids;
try {
    ids = JSON.parse(textoIds);
} catch (error) {
    console.log('✘ Error: el texto JSON no es válido');
    process.exit(1);
}

// 2.
const promesas = ids.map((id) => buscarLibro(id));
const resultados = await Promise.allSettled(promesas);

// 3.
let encontrados = 0;
let noExisten = 0;

for (let i = 0; i < resultados.length; i++) {
  const res = resultados[i];
  const id = ids[i];

  if (res.status === 'fulfilled') {
    console.log(`✔ ${id} · ${res.value.titulo}`);
    encontrados++;
  } else {
    console.log(`✘ ${id} · ${res.reason.message}`);
    noExisten++;
  }
}

// 4.
console.log(`${encontrados} encontrados y ${noExisten} no existen`);