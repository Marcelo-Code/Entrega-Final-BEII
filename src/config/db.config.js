import mongoose from "mongoose";

const connectDB = async (url) => {
  try {
    const connect = await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`Conectado a la base de datos ${connect.connection.host}`);
    return connect;
  } catch (error) {
    console.error("Error al conectar a la base de datos", error);
    process.exit(1);
  }
};

export default connectDB;
