import executeQuery from "../../../context/pgConnection";
import Videojuego from "../../../videojuegos/domain/videojuego";
import Usuario from "../../domain/usuario";
import UsuarioRepository from "../../domain/usuarioRepository";

export default class UsuarioRepositoryPostgress implements UsuarioRepository{

    comprar(videojuego: Videojuego): Promise<Videojuego> {
        throw new Error("Method not implemented.");
    }

    getCompras(idUsuario: number): Promise<Videojuego> {
        throw new Error("Method not implemented.");
    }
    
    addCarrito(videojuego: Videojuego, idUsuario: number): Promise<Videojuego>{

        const consulta = `INSERT INTO public.compras("idVideojuego", "idUsuario", comprado) VALUES (${videojuego.id}, ${idUsuario}, false);`

        const videojuegosCarrito= this.getCarrito(idUsuario);

        return videojuegosCarrito;

    }


    async getCarrito(idUsuario: number): Promise<Videojuego> {

        const consulta = `SELECT "idVideojuego"
        FROM public.compras where comprado=false AND "idUsuario"=${idUsuario};`

        const videojuegosCarrito = await executeQuery(consulta);

        console.log(videojuegosCarrito);

        return videojuegosCarrito
    }
    
    async registro(usuario: Usuario): Promise<Usuario> {
        
        const consulta = `insert into usuarios (nombre, password) VALUES ('${usuario.nombre}','${usuario.password}') returning *`;
        const rows: any[] = await executeQuery(consulta);

        console.log(rows);
        

        const usuarioBD: Usuario = {
            nombre: rows[0].nombre,
            password: rows[0].password
        }

        return usuarioBD;
    }



    async login(usuario: Usuario): Promise<Usuario> {

        const consulta = `select * from usuarios where nombre = '${usuario.nombre}'`;
        const rows: any[] = await executeQuery(consulta);
        if(rows.length === 0){
            throw new Error("Usuario/contraseña no es correcto");
        }else{
            const usuarioBD: Usuario = {
                nombre: rows[0].nombre,
                password:rows[0].password,
                id:rows[0].id
            }
            return usuarioBD;
        }
        
    }

}