const generarInformeDeValidacion = () => {
    const nombre = document.getElementById('nombre').value.trim();
    const mail = document.getElementById('correo').value.trim();

    const informeError = document.getElementById('informe-errores');

    informeError.innerHTML = "";


    let errores = [];

    if (nombre.length <= 3){
        errores.push("El nombre debe tener mas de 3 caracteres");
    }

    if (!mail.includes('@')){
        errores.push("El email debe contener un '@'.");
    }

    if (errores.length > 0){
        errores.forEach(mensaje => {
            const pError = document.createElement('p');
            pError.textContent = mensaje;
            pError.style.color = 'red';
            informeError.appendChild(pError);
        })
    }else{
        const pValido = document.createElement('p');
        pValido.textContent = "Formulario valido";
        pValido.style.color = 'green';
        informeError.appendChild(pValido);
    }
}

document.getElementById('formulario').addEventListener('submit', (e) => {
        e.preventDefault();
        generarInformeDeValidacion();
    });



// const generarInformeDeValidacion = () => {
//   const nombreValor = document.getElementById('nombre').value.trim();
//   const emailValor = document.getElementById('correo').value.trim();email
//   const contenedorErrores = document.getElementById('informe-errores');
  
//   contenedorErrores.innerHTML = '';
  
//   let errores = [];

//   if (nombreValor.length <= 3) {
//     errores.push("El nombre debe tener más de 3 caracteres.");
//   }
//   if (!emailValor.includes('@')) {
//     errores.push("El email debe contener un carácter '@'.");
//   }

//   if (errores.length > 0) {
//     errores.forEach(mensajeError => {
//       const p = document.createElement('p');
//       p.textContent = mensajeError;
//       p.classList.add('error');
//       contenedorErrores.appendChild(p);
//     });
//   } else {
//     const pValido = document.createElement('p');
//     pValido.textContent = "Formulario válido";
//     pValido.classList.add('valido');
//     contenedorErrores.appendChild(pValido);
//   }
// };

// // Captura del evento submit para evaluar
// document.getElementById('formulario').addEventListener('submit', (e) => {
//   e.preventDefault();
//   generarInformeDeValidacion();
// });