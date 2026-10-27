const imagenesMini = document.querySelectorAll('.miniatura');

export function cambiarImagenPrincipal(indice){
    // const imagenesMini = document.querySelectorAll('.miniatura');

    
    if (indice >= 0 && indice < imagenesMini.length) {
        const imgSelec = imagenesMini[indice];
        const nuevoSrc = imgSelec.getAttribute('src');

        const imgPrin = document.getElementById('imagen-principal');
        imgPrin.src = nuevoSrc;

        resaltarMini(indice);
    }
}

function resaltarMini(indice){
    // const imagenesMini = document.querySelectorAll('.miniatura');

    imagenesMini.forEach((imagenesMini, i) => {
        if (i === indice) {
            imagenesMini.classList.add('activa');
        } else {
            imagenesMini.classList.remove('activa');
        }
    })
}