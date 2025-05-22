import { generateUniqueCode } from "../utils.js";
import cartModel from "./models/cart.model.js";
import ticketModel from "./models/ticket.model.js";

export default class TicketDAO {
  createTicket = async (cid, email) => {
    const carts = await cartModel.find();
    const cart = await cartModel.findById(cid).populate("products.product");

    const amount = cart.products.reduce((acc, product) => {
      return acc + product.product.price * product.quantity;
    }, 0);

    const newTicket = {
      code: await generateUniqueCode(),
      purchase_datetime: new Date(),
      amount,
      purchaser: email,
    };
    try {
      const createdTicket = await ticketModel.create(newTicket);
      return createdTicket;
    } catch (error) {
      throw error;
    }
  };

  getTickets = async () => {
    try {
      const tickets = await ticketModel.find();
      return tickets;
    } catch (error) {
      throw error;
    }
  };

  getTicketById = async (id) => {
    try {
      const cart = await ticketModel.findOne({ _id: id });
      return cart;
    } catch (error) {
      throw error;
    }
  };
}
