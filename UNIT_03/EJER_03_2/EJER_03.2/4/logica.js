import { createElement } from "react"

const usuarios = [
    {
        nombre: 'Ana',
        edad: 25,
    },
    {
        nombre: 'Luis',
        edad: 30,
    }
]
export function createTable(usuarios){
    document.createElement('table')

    const tabla = document.getElementsByClassName('table')

// errores.forEach(mensaje => {
//             const pError = document.createElement('p');
//             pError.textContent = mensaje;
//             pError.style.color = 'red';
//             informeError.appendChild(pError);

}