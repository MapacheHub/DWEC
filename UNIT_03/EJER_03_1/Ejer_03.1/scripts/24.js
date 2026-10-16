// Para estandarizar los títulos de los cursos, recorre todos los h2 que están dentro de las tarjetas y añade el prefijo “[CURSO]” al principio de su texto.

let archivo_24 = document.querySelectorAll('.card h2');

for (let i = 0; i !== 3; i++){
    
    const bigT = archivo_24[i];
    bigT.textContent = (`[CURSO] ${bigT.textContent}`);
}

console.log("24.", archivo_24);