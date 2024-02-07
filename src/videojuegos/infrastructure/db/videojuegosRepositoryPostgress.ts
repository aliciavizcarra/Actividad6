import executeQuery from "../../../context/pgConnection";
import Videojuego from "../../domain/videojuego";
import VideojuegosRepository from "../../domain/videojuegosRepository";

export default class VideojuegoRepositoryPostgres implements VideojuegosRepository{

    async save(videojuego: Videojuego) {
        const consulta = `insert into videojuegos (nombre) values ('${videojuego.nombre})`;
        const rows: any[] = await executeQuery(consulta);
    }
   
    getAll() {

        try{

            


        }

    }

}