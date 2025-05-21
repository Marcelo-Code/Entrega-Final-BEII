import mongoose from "mongoose";

const { schema } = mongoose;

const ticketCollection = "tickets";

const ticketSchema = new mongoose.Schema({
  products: [
    {
      carts: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "tickets",
        required: true,
      },
    },
  ],
});

const ticketModel = mongoose.model(ticketCollection, ticketSchema);
export default cartModel;
