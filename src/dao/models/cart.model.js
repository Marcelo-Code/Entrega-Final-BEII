import mongoose from "mongoose";

const { schema } = mongoose;

const cartCollection = "carts";

const cartSchema = new mongoose.Schema({
  products: [
    {
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "products",
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
        default: 0,
        min: 0,
      },
    },
  ],
});

const cartModel = mongoose.model(cartCollection, cartSchema);
export default cartModel;
