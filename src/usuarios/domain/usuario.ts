import Compra from "../../compras/domain/compra";
import Videojuego from "../../videojuegos/domain/videojuego";

export default interface Usuario {
    id?: number,
    nombre: string,
    password: string
    compras?: Compra[]
    carrito?: Videojuego[];
  }