import peliculas from "./peliculas.json" with {type:"json"};

function main(){
    let param = process.argv.slice(2);
    let filtro = param[0];
    let valor = param[1];

    if (filtro === "genero") {
        let pelicula = filtrarPorGenero(valor);
        console.log(pelicula);
    }
    if (filtro === "nombre") {
        param[0]
    }
    if (filtro === "año") {
        console.log("busca por año");
    }
    console.log("fin de los ifs");
}

main();

function filtrarPorGenero(valor) {
    return peliculas.filter((pelicula)=>{
        return (pelicula.genero.toLowerCase() === valor.toLowerCase());
    })
}


