import Videojuego from "../../domain/videojuego";
import VideojuegosRepository from "../../domain/videojuegosRepository";

export default class VideojuegoRepositoryPostgres implements VideojuegosRepository{


    getAll() {

        const videojuegos: any[][] = []; 
        const url ="https://api.steampowered.com/ISteamApps/GetAppList/v0002/?key=STEAMKEY&format=json";

        fetch(url)

        .then(response => {
            if (!response.ok) {
            throw new Error(`Error en la solicitud: ${response.status}`);
            }
            return response.text();
        })
        .then(data => {
            console.log(data);  // Aquí puedes manejar los datos obtenidos de Google
        })
        .catch(error => {
            console.error('Error:', error);
        });

    }

}