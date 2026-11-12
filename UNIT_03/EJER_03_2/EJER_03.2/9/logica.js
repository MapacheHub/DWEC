const ciudades = [
    { ciudad: 'Madrid', pais: 'España'},
    { ciudad: 'Berlin', pais: 'Alemania'},
    { ciudad: 'Oviedo', pais: 'España'},
    { ciudad: 'Paris', pais: 'Francia'},
    { ciudad: 'Roma', pais: 'Italia'},
];

const lista = document.getElementById('lista');

ciudades.forEach(sitio => {
    const li = document.createElement('li');
    li.textContent = `${sitio.ciudad} - ${sitio.pais}`;
    lista.appendChild(li);
});

function filtroBusqueda(Ubicacion){
    const filtro = Ubicacion.toLowerCase();
    const elemento = lista.querySelectorAll('li');

    elemento.forEach(li => {
        const contenido = li.textContent.toLowerCase();
        li.style.display = contenido.includes(filtro) ? '' : 'none';
    })
}