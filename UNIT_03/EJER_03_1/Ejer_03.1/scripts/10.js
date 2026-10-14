// El primer enlace del menú de navegación está roto. Asegúrate de que apunte a ‘https://www.google.com’.

const redirec = document.querySelector('.navegacion a:first-child');
redirec.href = "https://www.google.com";
console.log("10.", redirec);