import cartModel from "./models/cart.model.js";

export default class TicketDAO {
  createTicket = async (newTicket) => {
    try {
      const createdTicket = await ticketModel.create(newTicket);
      return createdTicket;
    } catch (error) {
      return error;
    }
  };

  getTickets = async () => {
    try {
      const tickets = await ticketModel.find();
      return tickets;
    } catch (error) {
      return error;
    }
  };

  getTicketById = async (id) => {
    try {
      const cart = await ticketModel.findOne({ _id: id });
      return cart;
    } catch (error) {
      return error;
    }
  };

  deleteTicket = async (id) => {
    try {
      const deletedTicket = await ticketModel.deleteOne({ _id: id });
      return deletedTicket;
    } catch (error) {
      return error;
    }
  };
}
