let playlist = [
    {titulo: "1", artista: "a", duracion: 1},
    {titulo: "2", artista: "b", duracion: 2},
    {titulo: "3", artista: "c", duracion: 3},
    {titulo: "4", artista: "d", duracion: 4},
    {titulo: "5", artista: "e", duracion: 5},
    {titulo: "6", artista: "f", duracion: 6},
    {titulo: "7", artista: "g", duracion: 7},
    {titulo: "8", artista: "h", duracion: 8}
]

let playlistLong = playlist.filter(function (song){
    if(song.duracion >= 180) {
        return song
    }
})

playlistLong.forEach(function (song) {
    console.log("Titulo de la cancion: " + song.titulo + " | Artista: " + song.artista)
}
)