import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete
} from "@nestjs/common";
import { ProductsService } from "./products.service";
import { Product } from "./product.model";

@Controller("products")
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  async addProduct(
    @Body("title") prodTitile: string,
    @Body("description") prodDesc: string,
    @Body("price") prodPrice: number
  ) {
    const newProduct = await this.productsService.insertProduct(
      prodTitile,
      prodDesc,
      prodPrice
    );
    return { newProduct };
  }

  @Get()
  async getAllProducts() {
    return await this.productsService.getProducts();
  }

  @Get(":id")
  async getProduct(@Param("id") prodId: string) {
    return await this.productsService.getSingleProduct(prodId);
  }

  @Patch(":id")
  async updateProduct(
    @Param("id") prodId: string,
    @Body("title") prodTitle: string,
    @Body("description") prodDesc: string,
    @Body("price") prodPrice: number
  ) {
    const updatedProd: Product = await this.productsService.updateProduct(
      prodId,
      prodTitle,
      prodDesc,
      prodPrice
    );
    return updatedProd;
  }

  @Delete(":id")
  removeProduct(@Param("id") prodId: string) {
    this.productsService.deleteProduct(prodId);
  }
}
