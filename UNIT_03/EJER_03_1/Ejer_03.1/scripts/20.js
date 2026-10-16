// Localiza el segundo enlace del menú. Tu objetivo es, partiendo de él, llegar hasta el título <h1> principal de la cabecera y cambiar su color a naranja.

const secEn = document.querySelector('.navegacion a:nth-child(2)'); 
const secToTit = secEn.parentElement.parentElement.querySelector('h1').style.color = "orange";

console.log("20.", secToTit);