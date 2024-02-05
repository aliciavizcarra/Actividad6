import Videojuego from "../domain/videojuego";
import VideojuegosRepository from "../domain/videojuegosRepository";

export default class VideojuegoUseCases{

    constructor(private videojuegosRepository: VideojuegosRepository){}

    async getAll(){
        return this.videojuegosRepository.getAll();
    }


}