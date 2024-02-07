import express from "express";
import UsuarioUseCases from "../../application/usuarioUseCases";
import UsuarioRepository from "../../domain/usuarioRepository";
import UsuarioRepositoryPostgress from "../db/usuarios.repository.postgress";
import Usuario from "../../domain/usuario";
import { createToken, isAuth } from "../../../context/security/auth";
import Videojuego from "../../../videojuegos/domain/videojuego";

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
    res.json({usuario, token});


})

router.post("/carrito", isAuth, async(req,res)=>{

    const usuario: any = {
        id: req.body.user
    }

    const videojuego= req.body.id;

    const videojuegoNuevo = await usuarioUseCases.addCarrito(videojuego,usuario.id)

    const carritoVideojuegos = await usuarioUseCases.getCarrito(usuario.id)

    res.json(carritoVideojuegos);

})

router.get("/carrito", isAuth, async(req,res)=>{

    const idUsuario = req.body.user
    const carritoVideojuegos = await usuarioUseCases.getCarrito(idUsuario)

    res.json(carritoVideojuegos);

})



export {router as routerUsuarios};