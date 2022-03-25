const { Schema, model } = require("mongoose");
const clientSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  image: {
    type: String,
    required: true,
  },
  document: {
    type: Number,
    required: true,
  },
  contact: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    require: true,
  },
  namePet: {
    type: String,
    require: true,
  },
});

export default model("Client", clientSchema);
