import session from "express-session";
import MongoStore from "connect-mongo";
import express from "express";
import handlebars from "express-handlebars";
import { __dirname } from "./utils.js";
import viewsRouter from "./routes/views.router.js";
import sessionRouter from "./routes/session.router.js";
import passport from "passport";
import initializePassport from "./config/passport.config.js";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import { config } from "./config/config.js";
import productRouter from "./routes/product.router.js";
import userRouter from "./routes/user.router.js";
import connectDB from "./config/db.config.js";
import cartRouter from "./routes/cart.router.js";
import ticketRouter from "./routes/ticket.router.js";

dotenv.config();

const app = express();

//Configuración de sesiones
app.use(
  session({
    store: MongoStore.create({
      mongoUrl: config.URL_MONGO,
      //   mongoOptions: { useNewUrlParser: true, useUnifiedTopology: true },
      ttl: 600,
    }),
    secret: "secretPassword",
    resave: false,
    saveUninitialized: false,
  })
);

//Configuración de los middleware para trabajar con json desde formularios
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const connection = connectDB(config.URL_MONGO);

//Configuración de passport
initializePassport();
app.use(passport.initialize());
app.use(passport.session());

//COnfiguración del motor de plantillas
app.engine("handlebars", handlebars.engine());
app.set("views", __dirname + "/views");
app.set("view engine", "handlebars");

// Configuración de la carpeta pública
app.use(express.static("public"));

//Rutas
app.use(cookieParser());
app.use("/", viewsRouter);
app.use("/api/sessions", sessionRouter);
app.use("/api/products", productRouter);
app.use("/api/users", userRouter);
app.use("/api/carts", cartRouter);
app.use("/api/tickets", ticketRouter);

const server = app.listen(config.PORT, () => {
  console.log(`Server running on port ${config.PORT}`);
});
