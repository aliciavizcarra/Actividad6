import Compra from "./compra";

export default interface CompraRepository{
    comprar(carrito: any[]): Promise<Compra[]> //tu le pasas un array de la tabla carrito con el id del usuarion para que te traiga lo que tiene en el carrito y de ahi, coges todos los videojuegos con su idUsuario y la cantidad, y lo añades a un array de compras;
}