let playlist = [
    {titulo: "Soft Fuzzy Man", artista: "Lemon Demon", duracion: 175},
    {titulo: "Touch-Tone Telephone", artista: "Lemon Demon", duracion: 283},
    {titulo: "Still Life", artista: "Half Alive", duracion: 257},
    {titulo: "Assumtion", artista: "sam gellaitry", duracion: 218},
    {titulo: "Charlie's Inferno", artista: "That Handsome Devil", duracion: 225},
    {titulo: "Nostalgia", artista: "Kingsley Scanlon", duracion: 79},
    {titulo: "Ghost", artista: "nelward", duracion: 157},
    {titulo: "Virtual Insanity", artista: "Jamiroquai", duracion: 234}
]

playlist.forEach(function (song) {
    console.log("Titulo de la cancion: " + song.titulo + " | Artista: " + song.artista)
}
)