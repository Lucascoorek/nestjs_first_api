import { Controller, Post, Body, Get, Param, Patch } from "@nestjs/common";
import { ProductsService } from "./products.service";
import { Product } from "./product.model";

@Controller("products")
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  addProduct(
    @Body("title") prodTitile: string,
    @Body("description") prodDesc: string,
    @Body("price") prodPrice: number
  ): { id: string } {
    const generatedId = this.productsService.insertProduct(
      prodTitile,
      prodDesc,
      prodPrice
    );
    return { id: generatedId };
  }

  @Get()
  getAllProducts() {
    return this.productsService.getProducts();
  }

  @Get(":id")
  getProduct(@Param("id") prodId: string) {
    return this.productsService.getSingleProduct(prodId);
  }

  @Patch(":id")
  updateProduct(
    @Param("id") prodId: string,
    @Body("title") prodTitle: string,
    @Body("description") prodDesc: string,
    @Body("price") prodPrice: number
  ) {
    const updatedProd: Product = this.productsService.updateProduct(
      prodId,
      prodTitle,
      prodDesc,
      prodPrice
    );
    return updatedProd;
  }
}
