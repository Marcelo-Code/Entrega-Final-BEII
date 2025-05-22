import { Router } from "express";
import {
  createTicket,
  getTickets,
  getTicketById,
} from "../controllers/ticket.controller.js";
import passport from "passport";

const router = Router();

//Generar tickets (cerrar la compra), solamente los usuarios autenticados
router.post(
  "/:cid",
  passport.authenticate("cartUser", { session: false }),
  createTicket
);

//Obtener todos los tickets, solamente los admins
router.get("/", passport.authenticate("admin", { session: false }), getTickets);

//Obtener un ticket por id, solamente los admins
router.get(
  "/:tid",
  passport.authenticate("admin", { session: false }),
  getTicketById
);

export default router;
