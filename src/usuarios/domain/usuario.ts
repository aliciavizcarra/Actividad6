import Videojuego from "../../videojuegos/domain/videojuego";
import Compra from "./compras";

export default interface Usuario {
    id?: number,
    nombre: string,
    password: string
    compras?: Compra[]
    carrito?: Videojuego[]; // te traes la tabla de compras los q tengan comprado como false
  }