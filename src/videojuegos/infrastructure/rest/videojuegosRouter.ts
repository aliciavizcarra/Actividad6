import express from "express";
import VideojuegoUseCases from "../../application/videojuegos.useCases";
import VideojuegosRepository from "../../domain/videojuegosRepository";
import VideojuegoRepositoryPostgres from "../db/videojuegosRepositoryPostgress";

const videojuegoUseCases: VideojuegoUseCases = new VideojuegoUseCases(new VideojuegoRepositoryPostgres);

const router = express.Router();

router.get("/", async(req,res)=>{
    return videojuegoUseCases.getAll();
})

export {router as routerVideojuegos}