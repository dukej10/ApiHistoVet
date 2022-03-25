// Conexion a la base de datos
import mongoose from "mongoose";
mongoose
  .connect("mongodb://localhost/HistoVet", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((db) => console.log("Db is connected"))
  .catch((erro) => console.log(error));
