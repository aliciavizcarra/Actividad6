import executeQuery from "../../../context/pgConnection";
import Usuario from "../../domain/usuario";
import UsuarioRepository from "../../domain/usuarioRepository";

export default class UsuarioRepositoryPostgress implements UsuarioRepository{
    
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
            }
            return usuarioBD;
        }
        
    }

}