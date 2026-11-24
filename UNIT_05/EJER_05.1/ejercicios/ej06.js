const nuevaLista = () => ({ propietario: 'Ana', productos: ['pan', 'leche'] });

// A
let lista1 = nuevaLista();
let igual = lista1;
igual.productos = 'huevos';

console.log("A");
console.log(lista1.productos);
console.log(lista1 === igual);
console.log("");

// B
let lista2 = nuevaLista();
let superficial = {...lista2};
superficial.propietario = 'Luis';
superficial.productos.push('queso');

console.log("B");
console.log(superficial);
console.log(lista2);
console.log("");

// C
let lista3 = nuevaLista();
let profunda = structuredClone(lista3);
profunda.propietario = 'Marta';
profunda.productos.push('fruta');

console.log("C");
console.log(profunda);
console.log(lista3);
console.log("");