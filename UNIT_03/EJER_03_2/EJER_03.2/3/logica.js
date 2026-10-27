export function generarInformeDeValidacion(){
    const nombre = document.getElementById('nombre').value.trim();
    const mail = document.getElementById('correo').value.trim();

    const informeError = document.getElementById('informe-errores');

    informeError.innerHTML = "";


    let errores = [];

    if (nombre.lenght <= 3){
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