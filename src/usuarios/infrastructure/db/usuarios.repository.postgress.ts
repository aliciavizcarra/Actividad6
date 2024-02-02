import Usuario from "../../domain/usuario";
import UsuarioRepository from "../../domain/usuarioRepository";

export default class UsuarioRepositoryPostgress implements UsuarioRepository{
    
    registro(usuario: Usuario): Promise<Usuario> {
        throw new Error("Method not implemented.");
    }
    login(usuario: Usuario): Promise<Usuario> {
        throw new Error("Method not implemented.");
    }

}