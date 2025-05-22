import { Router } from "express";
import userModel from "../dao/models/user.model.js";
import { createHash, generateToken, passportCall } from "../utils.js";
import passport from "passport";

const router = Router();

//ruta para obtener los datos de la cookie del usuario autenticado
router.get(
  "/current",
  passportCall("current", { session: false }),
  (req, res) => {
    res.json({
      message: "usuario activo",
      user: {
        _id: req.user._id,
        first_name: req.user.first_name,
        last_name: req.user.last_name,
        email: req.user.email,
        age: req.user.age,
        password: req.user.password,
        cart: req.user.cart,
        __v: req.user.__v,
        iat: req.user.iat,
        exp: req.user.exp,
        role: req.user.role,
      },
    });
  }
);

//ruta de login
router.post("/login", (req, res, next) => {
  passport.authenticate("login", { session: false }, (err, user, info) => {
    if (err) {
      return res.status(500).json({ error: "Error en login" });
    }

    if (!user) {
      return res.status(401).json({ error: info?.message });
    }

    const accessToken = generateToken(user.toObject());

    res
      .cookie("tokenCookie", accessToken, {
        httpOnly: true,
        maxAge: 600000,
      })
      .status(200)
      .json({
        message: "Login exitoso",
        token: accessToken,
        user: {
          _id: user._id,
          first_name: user.first_name,
          last_name: user.last_name,
          email: user.email,
          role: user.role,
        },
      });
  })(req, res, next);
});

//ruta de logout
router.post("/logout", (req, res) => {
  req.session.destroy((error) => {
    if (error) {
      res.status(500).json({ message: "Error al cerrar sesión" });
    }
    res.clearCookie("tokenCookie");
    res.status(200).json({ message: "Logout exitoso" });
  });
});

//ruta de perfil del usuario
router.get(
  "/profile",
  passportCall("isLoggedIn", { session: false }),
  (req, res) => {
    const { first_name, last_name, email, age, cart, role } = req.user;
    return res.status(200).json({
      first_name,
      last_name,
      email,
      age,
      cart,
      role,
    });
  }
);

//ruta de restaurar contraseña
router.post("/restore-password", async (req, res) => {
  const { email, password, repeat_password } = req.body;

  if (!email || !password || !repeat_password) {
    return res.status(400).json({ error: "Todos los campos son obligatorios" });
  }

  if (password !== repeat_password) {
    return res.status(400).json({ error: "Las contraseñas no coinciden" });
  }

  try {
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }

    user.password = createHash(password);
    await user.save();

    return res
      .status(200)
      .json({ message: "Contraseña actualizada exitosamente" });
  } catch (error) {
    console.error("Error al restaurar contraseña:", error);
    return res.status(500).json({ error: "Error al restaurar contraseña" });
  }
});

export default router;
