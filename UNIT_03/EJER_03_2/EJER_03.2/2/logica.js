function ocultarRespuestas() {
    const respuestas = document.querySelectorAll('#preguntas p');
    respuestas.forEach(p => p.classList.add('oculto'));
}

export function revelarRespuesta(elementoH2){
    const respuestaPregunta = elementoH2.nextElemntSibling;

    // Guardamos si ya estaba oculto antes de resetear
    const estabaOculto = respuestaPregunta.classList.contains('oculto');
    
    ocultarRespuestas();
    
    // Si estaba oculto, lo revelamos. Si ya estaba visible, se queda oculto (efecto toggle)
    if (estabaOculto) {
        respuestaPregunta.classList.remove('oculto');
    }
}

