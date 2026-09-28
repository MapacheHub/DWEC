let playlist = [
    {titulo: "Soft Fuzzy Man", artista: "Lemon Demon", duracion: 175},
    {titulo: "Touch-Tone Telephone", artista: "Lemon Demon", duracion: 283},
    {titulo: "Still Life", artista: "Half Alive", duracion: 257},
    {titulo: "Assumtion", artista: "d", duracion: 218},
    {titulo: "CI", artista: "e", duracion: 225},
    {titulo: "FD", artista: "f", duracion: 163},
    {titulo: "Ghost", artista: "g", duracion: 157},
    {titulo: "Virtual Insanity", artista: "h", duracion: 234}
]

playlist.forEach(function (song) {
    console.log("Titulo de la cancion: " + song.titulo + " | Artista: " + song.artista)
}
)