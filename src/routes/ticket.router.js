import { Router } from "express";
import {
  createTicket,
  getTickets,
  getTicketById,
  deleteTicket,
} from "../controllers/ticket.controller.js";

const router = Router();

router.post("/", createTicket);
router.get("/", getTickets);
router.get("/:tid", getTicketById);
router.delete("/:tid", deleteTicket);

export default router;
