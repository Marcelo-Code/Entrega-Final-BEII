import passport from "passport";
import local from "passport-local";
import userModel from "../dao/models/user.model.js";
import { isValidPassword, PRIVATE_KEY } from "../utils.js";

import jwt from "passport-jwt";

const LocalStrategy = local.Strategy;

const JWTStrategy = jwt.Strategy;
const ExtractJwt = jwt.ExtractJwt;

const cookieExtractor = (req) => {
  let token = null;
  if (req && req.cookies) token = req.cookies["tokenCookie"];
  return token;
};

const initializePassport = () => {
  //Estrategia de autenticación (función 'current')
  //Vierifica el usuario activo
  passport.use(
    "current",
    new JWTStrategy(
      {
        jwtFromRequest: ExtractJwt.fromExtractors([cookieExtractor]),
        secretOrKey: PRIVATE_KEY,
      },
      async (jwt_payload, done) => {
        try {
          if (jwt_payload.role !== "admin") {
            return done(null, false, {
              message: "Acceso denegado: solo administradores",
            });
          }

          return done(null, jwt_payload);
        } catch (error) {
          done(error);
        }
      }
    )
  );

  //Estrategia de autenticación (función 'isLoggedIn')
  //Verifica si el usuario esta logueado
  passport.use(
    "isLoggedIn",
    new JWTStrategy(
      {
        jwtFromRequest: ExtractJwt.fromExtractors([cookieExtractor]),
        secretOrKey: PRIVATE_KEY,
      },
      async (jwt_payload, done) => {
        try {
          return done(null, jwt_payload);
        } catch (error) {
          done(error, false);
        }
      }
    )
  );

  //Estrategia de autenticación (función 'admin')
  //Verifica si el usuario es admin
  passport.use(
    "admin",
    new JWTStrategy(
      {
        jwtFromRequest: ExtractJwt.fromExtractors([cookieExtractor]),
        secretOrKey: PRIVATE_KEY,
      },
      async (jwt_payload, done) => {
        try {
          if (jwt_payload.role !== "admin") {
            return done(null, false, {
              message: "Acceso denegado: solo administradores",
            });
          }
          return done(null, jwt_payload);
        } catch (error) {
          return done(error, false);
        }
      }
    )
  );

  //Estrategia de autenticación (función 'userCart')
  //Verifica si el usuario tiene perfil user y es el dueño del carrito en cuestión
  passport.use(
    "cartUser",
    new JWTStrategy(
      {
        jwtFromRequest: ExtractJwt.fromExtractors([cookieExtractor]),
        secretOrKey: PRIVATE_KEY,
      },
      async (jwt_payload, done) => {
        try {
          console.log(jwt_payload);
          const { role, cart } = jwt_payload;

          // Si el usuario no tiene rol 'user', denegar acceso
          if (role !== "user") {
            return done(null, false, {
              message: "Acceso restringido a usuarios",
            });
          }

          // Adjuntamos el carrito al payload autenticado
          return done(null, { ...jwt_payload, cart });
        } catch (error) {
          return done(error);
        }
      }
    )
  );

  // Estategia de login
  // Verifica si el usuario existe y la contraseña es correcta
  passport.use(
    "login",
    new LocalStrategy(
      { passReqToCallback: true, usernameField: "email" },
      async (req, email, password, done) => {
        try {
          if (!email || !password)
            return done(null, false, {
              message: "Todos los campos son obligatorios",
            });

          const user = await userModel.findOne({ email });
          if (!user) {
            return done(null, false, { message: "Usuario no encontrado" });
          }
          if (!isValidPassword(user, password)) {
            return done(null, false, { message: "Contraseña incorrecta" });
          }

          return done(null, user);
        } catch (error) {
          return done(error);
        }
      }
    )
  );

  passport.serializeUser((user, done) => {
    done(null, user._id);
  });

  passport.deserializeUser(async (id, done) => {
    try {
      const user = await userModel.findById(id);
      done(null, user);
    } catch (error) {
      done(error);
    }
  });
};

export default initializePassport;
