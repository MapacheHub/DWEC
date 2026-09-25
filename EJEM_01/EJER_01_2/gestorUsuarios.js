//  1.
export function crearPerfil(name, mail, old){
    return { 
        nombre: name, correo: mail, edad: old
    }
};

export default function mostrarPerfil(usuarios){
    return `Nombre: ${usuarios.nombre}, Email: ${usuarios.correo}, Edad: ${usuarios.edad}`
};

//  3.
export function esMayorDeEdad(usuarios){
    if(usuarios.edad >= 18){
        return true
    } else {
        return false
    }
}

export function obtenerMayoresDeEdad(usuarios) {    //  filtra los usuarios que son mayores de edad
    return usuarios.filter(esMayorDeEdad)
}

export function calcularPromedioEdad(usuarios) {
  if (usuarios.length === 0) return 0
  let sumaEdades = usuarios.reduce((acumulador, usuario) => acumulador + usuario.edad, 0)
  return `La edad promedio de los usuarios es: ${sumaEdades / usuarios.length}`
}