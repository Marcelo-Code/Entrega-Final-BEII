import TicketDTO from "../dao/dto/ticket.dto.js";
import TicketDAO from "../dao/ticket.dao.js";

export default class TicketRepository {
  constructor() {
    this.dao = new TicketDAO();
  }

  createTicket = async (cid, email) => {
    return await this.dao.createTicket(cid, email);
  };

  getTickets = async () => {
    return await this.dao.getTickets();
  };

  getTicketById = async (id) => {
    return await this.dao.getTicketById(id);
  };
}
