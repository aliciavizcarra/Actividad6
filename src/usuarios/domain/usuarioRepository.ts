import Videojuego from "../../videojuegos/domain/videojuego";
import Usuario from "./usuario";

export default interface UsuarioRepository {
  registro(usuario: Usuario): Promise<Usuario>;
  login(usuario: Usuario): Promise<Usuario>;
  addCarrito(idVideojuego: number, idUsuario: number): Promise<Videojuego>; //haces un insert en compras pero comprado como false;
  getCarrito(idUsuario: number): Promise<Videojuego>//Te traes de la tabla carrito todo lo añadido con tu id
  getCompras(idUsuario: number): Promise<Videojuego> 
  comprar(videojuego: Videojuego): Promise<Videojuego>
}