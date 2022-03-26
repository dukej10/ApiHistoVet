const { Schema, model } = require("mongoose");
const historySchema = new Schema(
  {
    date: {
      type: String,
      require: true,
    },
    nameOwner: {
      type: String,
      required: true,
    },
    documentOwner: {
      type: Number,
      required: true,
    },
    contactOwner: {
      type: Number,
      required: true,
    },
    emailOwner: {
      type: String,
      require: true,
    },
    namePet: {
      type: String,
      require: true,
    },
    breed: {
      type: String,
      require: true,
    },
    sex: {
      type: String,
      require: true,
    },
    weight: {
      type: String,
      require: true,
    },
    dateDew: {
      // fecha desparasitacion
      type: String,
      require: true,
    },
    vaccines: {
      type: String,
      require: true,
    },
    diseases: {
      type: String,
      require: true,
    },
    treatements: {
      type: String,
      require: true,
    },
    respiration: {
      type: String,
      require: true,
    },
    cardiac: {
      type: String,
      require: true,
    },
    temperature: {
      type: String,
      require: true,
    },
    attitude: {
      type: String,
      require: true,
    },
    description: {
      //Hallazgos
      type: String,
      require: true,
    },
    examns: {
      type: String,
      require: true,
    },
    description2: {
      type: String,
      require: true,
    },
    nameDoc: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true, //fecha de creación y última actualización
    versionKey: false,
  }
);

export default model("History", historySchema);
