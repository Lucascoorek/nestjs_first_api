import { Injectable, NotFoundException } from "@nestjs/common";
import { Product } from "./product.model";

@Injectable()
export class ProductsService {
  private products: Product[] = [];

  insertProduct(title: string, desc: string, price: number) {
    const prodId = Math.random().toString();
    const newProduct = new Product(prodId, title, desc, price);
    this.products.push(newProduct);
    return prodId;
  }
  getProducts() {
    return [...this.products];
  }
  getSingleProduct(id: string) {
    const product = this.products.find(prod => prod.id === id);
    if (!product) {
      throw new NotFoundException("product not found");
    }
    return { ...product };
  }
  updateProduct(id: string, title: string, desc: string, price: number) {
    const foundIndex: number = this.products.findIndex(prod => prod.id === id);
    if (foundIndex === -1) {
      throw new NotFoundException("no product to update");
    }
    const prod = this.products[foundIndex];
    if (title) prod.title = title;
    if (desc) prod.description = desc;
    if (price) prod.price = price;
    this.products[foundIndex] = prod;
  }
}
