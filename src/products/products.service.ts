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
  getProducts() {
    // return [...this.products];
  }
  getSingleProduct(id: string) {
    // const product = this.products.find(prod => prod.id === id);
    // if (!product) {
    //   throw new NotFoundException("product not found");
    // }
    // return { ...product };
  }
  updateProduct(id: string, title: string, desc: string, price: number) {
    // const foundIndex: number = this.products.findIndex(prod => prod.id === id);
    // if (foundIndex === -1) {
    //   throw new NotFoundException("no product to update");
    // }
    // const prod = this.products[foundIndex];
    // if (title) prod.title = title;
    // if (desc) prod.description = desc;
    // if (price) prod.price = price;
    // this.products[foundIndex] = prod;
    // return this.products[foundIndex];
  }
  deleteProduct(id: string) {
    // this.products = this.products.filter(prod => prod.id !== id);
  }
}
