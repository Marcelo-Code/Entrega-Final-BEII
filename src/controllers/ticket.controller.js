import TicketRepository from "../repositories/ticket.repository.js";

const ticketService = new TicketRepository();

export const createTicket = async (req, res) => {
  const { cid } = req.params;
  const email = req.user.email;
  let result = await ticketService.createTicket(cid, email);
  res.status(200).json(result);
};
export const getTickets = async (req, res) => {
  let result = await ticketService.getTickets();
  res.status(200).json(result);
};

export const getTicketById = async (req, res) => {
  let result = await ticketService.getTicketById(req.params.tid);
  res.status(200).json(result);
};
