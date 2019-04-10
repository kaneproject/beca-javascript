class GestorPeliculas {
    constructor(){
        this.listaPeliculas = new Array();
    }
    guardarPelicula(pelicula){
        if(typeof this.mostrarPelicula(pelicula.id) === "undefined"){
            this.listaPeliculas.push(pelicula);
        }
    }

    mostrarPeliculas(){
        return this.listaPeliculas;
    }
    mostrarPelicula(id){
        for(let i = 0;i < this.listaPeliculas.length;i++){
            let peliculaActual = this.listaPeliculas[i];
            if(peliculaActual.id == id){
                return peliculaActual;
            }
        }
    }
    actualizarPelicula(pelicula){
        for(let i = 0;i < this.listaPeliculas.length;i++){
            let peliculaActual = this.listaPeliculas[i];
            if(peliculaActual.id == pelicula.id){
                this.listaPeliculas[i] = pelicula;
                return true;
            }
        }
        return false;
    }
    borrarPelicula(id){
        for(let i = 0;i < this.listaPeliculas.length;i++){
            let peliculaActual = this.listaPeliculas[i];
            if(peliculaActual.id == id){
                return this.listaPeliculas.splice(i,1);
            }
        }
    }
}