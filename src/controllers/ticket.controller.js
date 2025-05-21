import TicketRepository from "../repositories/ticket.repository.js";

const ticketService = new TicketRepository();

export const createTicket = async (req, res) => {
  let result = await ticketService.createTicket(req.body);
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

export const deleteTicket = async (req, res) => {
  let result = await ticketService.deleteTicket(req.params.tid);
  res.status(200).json(result);
};
