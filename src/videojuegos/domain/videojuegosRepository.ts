import Usuario from "../../usuarios/domain/usuario";
import Videojuego from "./videojuego";

export default interface VideojuegosRepository{
    getAll(): any;
    save(videojuego: Videojuego): any;
    saveSteam(videojuego: Videojuego): any;
}