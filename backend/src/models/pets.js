const { Schema, model } = require("mongoose");
const petSchema = new Schema(
  {
    name: {
      type: String,
      require: true,
    },
    image: {
      type: String,
      required: true,
    },
    nameOwner: {
      type: String,
      required: true,
    },
    contactOwner: {
      type: Number,
      required: true,
    },
    age: {
      type: String,
      require: true,
    },
    breed: {
      type: String,
      require: true,
    },
    type: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true, //fecha de creación y última actualización
    versionKey: false,
  }
);

export default model("Pet", petSchema);
