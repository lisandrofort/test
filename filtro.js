import peliculas from "./peliculas.json" with {type:"json"};

function filtrarPorGenero(valor) {
    return peliculas.filter((pelicula)=>{
        let peliculaMinuscula = pelicula.genero.toLowerCase();
        return (peliculaMinuscula === valor.toLowerCase());
    })
}

function filtrarPorNombre(valor) {
    return peliculas.filter((pelicula)=>{
        let peliculaMinuscula = pelicula.nombre.toLowerCase();
        let parametroMinuscula = valor.toLowerCase();
        return (peliculaMinuscula.includes(parametroMinuscula));
    })
}

function filtrarPorAño(valor) {
    return peliculas.filter((pelicula)=>{
        return (pelicula.año == valor);
    })
}

export {
    filtrarPorGenero,
    filtrarPorNombre,
    filtrarPorAño
}