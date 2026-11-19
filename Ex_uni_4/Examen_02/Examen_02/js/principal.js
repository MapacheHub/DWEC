// Nombre y apellidos: ______________________________

import { peliculas } from './datos.js';

// ============================================================
// Elementos de la página (ya seleccionados: no los cambies)
// ============================================================
const formularioFiltros = document.querySelector('#formulario-filtros');
const cartelera = document.querySelector('#cartelera');
const contador = document.querySelector('#contador');
const listaReservas = document.querySelector('#lista-reservas');
const totalReservas = document.querySelector('#total-reservas');
const mensajeReservas = document.querySelector('#mensaje-reservas');
const formularioReserva = document.querySelector('#formulario-reserva');
const resultado = document.querySelector('#resultado');

// Se desactiva la validación del navegador: los mensajes los muestras tú (apartado 4)
formularioReserva.noValidate = true;

// Entradas reservadas (apartado 3)
let reservas = [];


// ============================================================
// APARTADO 1 · La cartelera
// ============================================================

// 1.1
const crearTarjeta = (pelicula) => {
  // TU CÓDIGO AQUÍ

  if(pelicula.disponible){
    const article = document.createElement('article');
    article.className = 'tarjeta';
    article.dataset.id = pelicula.id;
    article.classList.remove = 'agotada';

    const h3 = document.createElement('h3');
      h3.textContent = pelicula.titulo;

    const pInfo = document.createElement('p');
      pInfo.textContent = `${pelicula.genero} · ${pelicula.duracion} min`;

    const pCosto = document.createElement('p');
      pCosto = document.textContent = `${pelicula.precio} €`;

    const button = document.createElement('button');
      button.className = 'reservar';
      button.type = 'button';
      button.textContent = "Reservar";
      button.disabled = false;

  article.append(h3, pInfo, pCosto, button);
  return article

  } else {

    const article = document.createElement('article');
    article.className = 'tarjeta';
    article.classList.add = 'agotada';
    article.dataset.id = pelicula.id;

    const h3 = document.createElement('h3');
      h3.textContent = pelicula.titulo;

    const pInfo = document.createElement('p');
      pInfo.textContent = `${pelicula.genero} · ${pelicula.duracion} min`;

    const pCosto = document.createElement('p');
      pCosto = document.textContent = `${pelicula.precio} €`;

    const button = document.createElement('button');
      button.className = 'reservar';
      button.type = 'button';
      button.textContent = "Reservar";
      button.disabled = true;

  article.append(h3, pInfo, pCosto, button);
  return article
  }
};

// 1.2
const pintarCartelera = (lista) => {
  // TU CÓDIGO AQUÍ
  for (const peli of lista) {
    peli.replaceChildren();

    peli.appendChild(crearTarjeta(peli));
  }
};


// ============================================================
// APARTADO 2 · Filtros y orden
// ============================================================

// 2.1
const filtrarPeliculas = (lista, genero, soloDisponibles) => {
  // TU CÓDIGO AQUÍ

  const filtroPeliculas = lista.filter((peli) => {
    soloDisponibles === true;
    if (genero !== ''){
      peli.genero === genero;
    }
  })

  return filtroPeliculas;
};

// 2.2
const ordenarPeliculas = (lista, criterio) => {
  // TU CÓDIGO AQUÍ

  const ordenLista = 
    [...lista].sort((a, b) => {
      if (criterio === 'titulo'){
         return a.titulo.localeCompare(b.titulo);
      } else if (criterio === 'duracion'){
         return a.duracion - b.duracion;
      } else
      return a.precio - b.precio
    });

    return ordenLista;
};

// 2.3
const actualizarCartelera = () => {
  // TU CÓDIGO AQUÍ

  const genro = formularioFiltros.elements.genero;
  const disp = formularioFiltros.elements.disponibles;
  const order = formularioFiltros.elements.orden;

  const filList = filtrarPeliculas(peliculas, genro, disp);
  const newList = ordenarPeliculas(filList, order);

  pintarCartelera(newList);
  contador.textContent = `Mostrando ${newList.length} de ${peliculas.length} películas`;
};

// 2.4 · Eventos de los filtros
// TU CÓDIGO AQUÍ

formularioFiltros.addEventListener("input", actualizarCartelera());

formularioFiltros.addEventListener("load", actualizarCartelera());

// ============================================================
// APARTADO 3 · Entradas reservadas
// ============================================================

// 3.1
const anadirReserva = (pelicula) => {
  // TU CÓDIGO AQUÍ

  if (reservas.find((reserva) => reserva.id === pelicula.id) === undefined) {
    const nuevaReserva = {
      id: reservas.length + 1,
      titulo: pelicula.titulo,
      precio: pelicula.precio,
      cantidad: 1,
    }

    return nuevaReserva;
  } else {
    const reserva = reservas.find((reserva) => reserva.id === pelicula.id);
    return reserva.cantidad + 1;
  }
};

// 3.2
const eliminarReserva = (id) => {
  // TU CÓDIGO AQUÍ

  const eliminaReserva = reservas.filter((reserva) => reserva.id === id);

};

// 3.3
const calcularTotal = (lista) => {
  // TU CÓDIGO AQUÍ
  if (lista === 0) {
    return 0
  } else {
    return lista.reduce((sum, r) => sum + (r.precio * r.cantidad), 0);
  }
};

// 3.4
const pintarReservas = () => {
  // TU CÓDIGO AQUÍ
  listaReservas.replaceChildren(); 

  listaReservas.array.forEach(element => {
    const li = document.createElement('li');
    li.textContent = `${element.titulo} x ${element.cantidad} — ${element.cantidad * element.precio} €`;

  const button = document.createElement('button');
    button.className = 'quitar';
    button.dataset.id = element.id;
    button.type = 'button';
    button.textContent = 'X';

    li.append(button);
    return li;
  });

  totalReservas.textContent = `Total: ${calcularTotal(listaReservas)} €`;
};

// 3.5 · Eventos de la cartelera y de la lista de entradas
// TU CÓDIGO AQUÍ


// ============================================================
// APARTADO 4 · Formulario de reserva y validación
// ============================================================

// 4.1
const mostrarError = (campo) => {
  // TU CÓDIGO AQUÍ
};

// 4.2
const comprobarReglas = () => {
  // TU CÓDIGO AQUÍ
};

// 4.3 · Eventos focusout e input del formulario
// TU CÓDIGO AQUÍ

// 4.4 · Evento submit del formulario
// TU CÓDIGO AQUÍ


// ============================================================
// ARRANQUE · al cargar la página (apartados 2.4 y 3.5)
// ============================================================
// TU CÓDIGO AQUÍ
