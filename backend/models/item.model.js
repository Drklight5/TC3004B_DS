import mongoose from "mongoose";

const Schema = mongoose.Schema(
  {
    name: { type: String, default: "Item" },
    price: { type: Number, default: 0 },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("item", Schema)