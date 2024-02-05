import Videojuego from "../../videojuegos/domain/videojuego";
import Usuario from "./usuario";

export default interface UsuarioRepository {
  registro(usuario: Usuario): Promise<Usuario>;
  login(usuario: Usuario): Promise<Usuario>;
  addCarrito(videojuego: Videojuego): any; //Crear otra tabla llamada carrito donde se almacenen solo los videojuegos con los campos que tiene videojuego y el idUsuario
  getCarrito(idUsuario: number): Promise<Videojuego> //Te traes de la tabla carrito todo lo añadido con tu id
}