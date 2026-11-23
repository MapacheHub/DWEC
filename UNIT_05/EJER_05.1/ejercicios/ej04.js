const mascota = {
  nombre: 'Luna',
  edad: 3,
  vacunada: true,
  vacunas: ['rabia', 'moquillo'],
  apodo: undefined,
  fechaAlta: new Date('2026-09-01T10:00:00Z'),
};

const texto = JSON.stringify(mascota);
console.log(texto);

console.log("");

console.log(JSON.stringify(mascota, null, 2));

console.log("");

console.log(JSON.stringify(mascota, ['nombre', 'edad']));

console.log("");

const objeto = JSON.parse(texto);
console.log(objeto.vacunas[0], typeof(objeto.fechaAlta));

console.log("");