const dividir = (a, b) => {
  //TODO: lanza un error si b === 0

  if (b === 0){
    throw new Error("No se pude dividir entre 0 aqui")
  }

  return a / b
}

try {
  console.log(dividir(10, 0))
} catch (e) {
  console.log('Error:', e.message/* ... */)
} finally {
  console.log('Operación finalizada')
}