import TicketRepository from "../repositories/ticket.repository.js";

const ticketService = new TicketRepository();

export const createTicket = async (req, res) => {
  try {
    const { cid } = req.params;
    const email = req.user.email;
    let result = await ticketService.createTicket(cid, email);
    res
      .status(200)
      .json({ message: "ticket creado exitosamente", ticket: result });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al crear ticket", error: error.message });
  }
};
export const getTickets = async (req, res) => {
  try {
    let result = await ticketService.getTickets();
    res
      .status(200)
      .json({ message: "tickets obtenidos exitosamente", tickets: result });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al obtener tickets", error: error.message });
  }
};

export const getTicketById = async (req, res) => {
  try {
    let result = await ticketService.getTicketById(req.params.tid);
    res
      .status(200)
      .json({ message: "ticket obtenido exitosamente", ticket: result });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al obtener ticket", error: error.message });
  }
};
