import {filtrarPorAño,filtrarPorGenero,filtrarPorNombre} from "./filtro.js"; 

function main(){
    let param = process.argv.slice(2);
    let filtro = param[0];
    let valor = param[1];

    if (filtro === "genero") {
        let pelicula = filtrarPorGenero(valor);
        console.log(pelicula);
    }
    if (filtro === "nombre") {
        let pelicula = filtrarPorNombre(valor);
        console.log(pelicula);
    }
    if (filtro === "año") {
        let pelicula = filtrarPorAño(valor);
        console.log(pelicula);
    }
}

main();

