export default class TicketDTO {
  constructor(ticket) {
    this.ticket = ticket.carts.map((cart) => ({
      productId: cart.cartId || cart._id || cart.id,
      quantity: cart.quantity,
    }));
  }
}
