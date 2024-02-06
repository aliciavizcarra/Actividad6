import executeQuery from "../../../context/pgConnection";
import Videojuego from "../../domain/videojuego";
import VideojuegosRepository from "../../domain/videojuegosRepository";

export default class VideojuegoRepositoryPostgres implements VideojuegosRepository{

    async save(videojuego: Videojuego) {
        const consulta = `insert into videojuegos (nombre) values ('${videojuego.nombre})`;
        const rows: any[] = await executeQuery(consulta);
    }
   
    getAll() {

        const videojuegos: any[][] = []; 
        const url ="https://api.steampowered.com/ISteamApps/GetAppList/v0002/?key=STEAMKEY&format=json";

        fetch(url)

        .then(response => {
            if (!response.ok) {
            throw new Error(`Error en la solicitud: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log(videojuegos)
        })
        .catch(error => {
            console.error('Error:', error);
        });

    }

}