import { Schema, model } from "mongoose";
const roleSchema = new Schema(
  {
    name: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true, //fecha de creación y última actualización
    versionKey: false,
  }
);

export default model("Role", roleSchema);
