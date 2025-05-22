//Creo funciones que reutilizó o sos estandares en mis proyectos
import { fileURLToPath } from "url";
import { dirname } from "path";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import passport from "passport";
import ticketModel from "./dao/models/ticket.model.js";
import { v4 as uuidv4 } from "uuid";

const __filename = fileURLToPath(import.meta.url);

//Hashea la contraseña correspondiente
export const createHash = (password) =>
  bcrypt.hashSync(password, bcrypt.genSaltSync(10));

//Comprueba si la contraseña ingresada es válida
export const isValidPassword = (user, passwordSinHashear) =>
  bcrypt.compareSync(passwordSinHashear, user.password);

export const PRIVATE_KEY = "MarceloSecretKey";

export const generateToken = (user) => {
  const token = jwt.sign(user, PRIVATE_KEY, { expiresIn: "1d" });
  return token;
};

export const authToken = (req, res, next) => {
  const token = req.cookies.token; // Lee el token desde las cookies

  if (!token) {
    return res.status(401).send({ error: "Usuario no autenticado" });
  }

  //Verifica el token
  jwt.verify(token, PRIVATE_KEY, (error, credentials) => {
    if (error) {
      return res.status(403).send({ error: "Usuario no autorizado" });
    }

    //Guarda el objeto user en la request
    req.user = credentials;
    next();
  });
};

export const passportCall = (strategy) => {
  return async (req, res, next) => {
    passport.authenticate(strategy, function (err, user, info) {
      if (err) return next(err);
      if (!user) {
        return res
          .status(401)
          .send({ error: info.messages ? info.messages : info.toString() });
      }
      req.user = user;
      next();
    })(req, res, next);
  };
};

export const authorization = (role) => {
  return async (req, res, next) => {
    if (!req.user) return res.status(401).send({ message: "Unauthorized" });
    if (req.user.role != role)
      return res.status(403).send({ error: "No permissions" });
    next();
  };
};

export const __dirname = dirname(__filename);

export const generateUniqueCode = async () => {
  let code;
  let exists = true;
  while (exists) {
    code = uuidv4(); // o cualquier función generadora que uses
    exists = await ticketModel.exists({ code });
  }
  return code;
};
