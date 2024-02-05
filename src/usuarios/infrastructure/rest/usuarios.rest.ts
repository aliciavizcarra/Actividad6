import express from "express";
import UsuarioUseCases from "../../application/usuarioUseCases";
import UsuarioRepository from "../../domain/usuarioRepository";
import UsuarioRepositoryPostgress from "../db/usuarios.repository.postgress";
import Usuario from "../../domain/usuario";
import { createToken } from "../../../context/security/auth";

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

router.post("/login", async (req,res)=>{

    const usuarioAPI = req.body;

    const usuario: Usuario = await usuarioUseCases.login(usuarioAPI);
    if(usuario === null)
        res.status(404).json({mensaje : "Usuario no encontrado"});
    const token = createToken(usuario);
    res.json(usuario);
    
})

export {router as routerUsuarios};