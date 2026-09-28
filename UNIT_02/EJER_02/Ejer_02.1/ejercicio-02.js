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

let playlistLong = playlist.filter(function (song){
    if(song.duracion >= 180) {
        return song
    }
})

playlistLong.forEach(function (song) {
    console.log("La cancion " + song.titulo + " de " + song.artista + " dura " + song.duracion + " segundos.")
}
)