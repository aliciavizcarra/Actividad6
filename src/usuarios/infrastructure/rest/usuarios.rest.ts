import express from "express";
import UsuarioUseCases from "../../application/usuarioUseCases";
import UsuarioRepository from "../../domain/usuarioRepository";
import UsuarioRepositoryPostgress from "../db/usuarios.repository.postgress";
import Usuario from "../../domain/usuario";

const usuarioUseCases: UsuarioUseCases = new UsuarioUseCases(new UsuarioRepositoryPostgress);

const router = express.Router();

router.post("/registro", async (req,res)=>{

    const usuarioIntroducido = req.body;
    const usuarioNuevo: Usuario = {
        nombre:usuarioIntroducido.nombre,
        password: usuarioIntroducido.password
    }

    const usuario: Usuario = await usuarioUseCases.registro(usuarioNuevo);
    res.json(usuario);
})

export {router as routerUsuarios};