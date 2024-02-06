import dotenv from "dotenv";
import express from "express";
import { routerUsuarios } from "./usuarios/infrastructure/rest/usuarios.rest";
import { routerVideojuegos } from "./videojuegos/infrastructure/rest/videojuegosRouter";


dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use("/usuarios", routerUsuarios)
app.use("/videojuegos", routerVideojuegos)


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

