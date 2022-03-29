import { Schema, model } from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      require: true,
    },
    email: {
      type: String,
      unique: true,
      require: true,
    },
    password: {
      type: String,
      require: true,
    },
    roles: [
      {
        ref: "Role",
        type: Schema.Types.ObjectId,
      },
    ],
  },
  {
    timestamps: true, //fecha de creación y última actualización
    versionKey: false,
  }
);

// para cifrar contraseña
userSchema.statics.encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
};

// comparar contraseñas
userSchema.statics.comparePassword = async (password, receivedPassword) => {
  return bcrypt.compare(password, receivedPassword);
};

export default model("User", userSchema);
