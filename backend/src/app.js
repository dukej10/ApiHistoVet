// configurar aplicacion express

import express from "express";
import morgan from "morgan";
import pkg from "../package.json";
import { createRoles } from "./libs/initialSetup";
// import routes
import clientsRoutes from "./routes/clients.routes";
import petsRoutes from "./routes/pets.routes";
import historyRoutes from "./routes/history.routes";
import authRoutes from "./routes/auth.routes";

const app = express();
createRoles();

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
app.use("/api/clients", clientsRoutes);
app.use("/api/pets", petsRoutes);
app.use("/api/history", historyRoutes);
app.use("/api/auth", authRoutes);
export default app;
