import * as mongoose from "mongoose";

export const ProductSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number
});
