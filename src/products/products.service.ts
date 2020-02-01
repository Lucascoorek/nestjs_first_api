import { Injectable, NotFoundException } from "@nestjs/common";
import { Product } from "./product.model";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel("Product") private readonly productModel: Model<Product>
  ) {}

  async insertProduct(title: string, desc: string, price: number) {
    const newProduct = new this.productModel({
      title,
      description: desc,
      price
    });
    return await newProduct.save();
  }
  async getProducts() {
    return await this.productModel.find().exec();
  }
  async getSingleProduct(id: string) {
    const product = await this.productModel.findById(id).exec();
    if (!product) {
      throw new NotFoundException("product not found");
    }
    return product;
  }
  async updateProduct(id: string, title: string, desc: string, price: number) {
    const product = await this.productModel.findById(id).exec();
    if (!product) {
      throw new NotFoundException("product not found");
    }
    if (title) product.title = title;
    if (desc) product.description = desc;
    if (price) product.price = price;
    await product.save();
    return product;
  }
  deleteProduct(id: string) {
    // this.products = this.products.filter(prod => prod.id !== id);
  }
}
