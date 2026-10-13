// ================================================================
// RETO 2 · switch Y BUCLES                          (escribir funciones)
// ================================================================


// 2.1 descuentoPorCategoria
export const descuentoPorCategoria = (categoria) => {
  // TU CÓDIGO AQUÍ
  switch (categoria){
    case 'estudiante':
    case 'jubilado':
      return 0.2;
      break;
    case 'familiaNumerosa':
      return 0.3
      break;
    case 'socio':
      return 0.1;
      break;
    default:
      return 0;
  }
};

// 2.2 sumarHastaLimite
export const sumarHastaLimite = (numeros, limite) => {
  // TU CÓDIGO AQUÍ

  for(let i = 0; i <= limite; i++){
    let sumaTot;
    if (numeros.fi < 0 || numeros[i] === null) {
      continue;
    }
    sumaTot = numeros.reduce((acu, valor) => acu + valor, 0)
    return sumaTot
  }
  
};

// 2.3 contarVocales
export const contarVocales = (texto) => {
  // TU CÓDIGO AQUÍ
 
    for(let silava of texto.toLowerCase().split('')){
      
      if (silava === 'a' || silava === 'e' || silava === 'i' || silava === 'o' || silava === 'u' || silava === 'á' || silava === 'é' || silava === 'í' || silava === 'ó' || silava === 'ú') {
        count + 1;
        console.log("+1")
      } 
      
      return count;
    }
  

};
