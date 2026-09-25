const maximo = (...numeros) => {    // rest
  //TODO: recorre "numeros" con un bucle y guarda el mayor valor
  let max = 0
  for (num of numeros){
    if (num > max) {
        max = num
    }
  }
  return max
}

const notas = [7, 9, 5, 10, 6]

console.log(maximo(...notas)) // 10     spread

//  el rest es para separar cada valor de un array, perfecto para cojer en este caso el numero mayor
//  mientras que el spread es para "repartir los datos"