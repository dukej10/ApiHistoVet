// configurar aplicacion express

import express from "express";
import morgan from "morgan";
import pkg from "../package.json";
// import routes
import clientsRoutes from "./routes/clients.routes";
import petsRoutes from "./routes/pets.routes";
const app = express();

app.set("pkg", pkg);
app.use(morgan("dev"));
app.use(express.json()); //Entender los datos en formato JSON

// Cuando se visita la ruta inicial
app.get("/", (req, res) => {
  res.json({
    name: app.get("pkg").name,
    author: "DevsWorld",
    version: app.get("pkg").version,
  });
});

//Routes
app.use("/clients", clientsRoutes);
app.use("/pets", petsRoutes);
export default app;
