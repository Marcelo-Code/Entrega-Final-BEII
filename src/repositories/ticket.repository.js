import TicketDTO from "../dao/dto/ticket.dto.js";
import TicketDAO from "../dao/ticket.dao.js";

export default class TicketRepository {
  constructor() {
    this.dao = new TicketDAO();
  }

  createTicket = async (newTicket) => {
    ticketToCreate = new TicketDTO(newTicket);
    return await this.dao.createTicket(ticketToCreate);
  };

  getTickets = async () => {
    return await this.dao.getTickets();
  };

  getTicketById = async (id) => {
    return await this.dao.getTicketById(id);
  };

  deleteTicket = async (id) => {
    return await this.dao.deleteTicket(id);
  };
}
