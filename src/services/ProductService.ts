import { Product } from '../../src/models/Product'
import { ProductRepository } from '../repositories/ProductRepository'

export class ProductService {
  private productRepository: ProductRepository

  constructor() {
    this.productRepository = new ProductRepository()
  }

  public async createProduct(product: Product): Promise<Product> {
    const createdProduct: Product = await this.productRepository.createProduct(
      product
    )
    return createdProduct
  }

  public async getProduct(id: number): Promise<Product | undefined> {
    const product: Product | undefined =
      await this.productRepository.getProduct(id)
    return product
  }

  public async updateProduct(
    id: number,
    name: string,
    price: number,
    description: string
  ): Promise<Product | undefined> {
    const updatedProduct: Product | undefined =
      await this.productRepository.updateProduct(id, name, price, description)
    return updatedProduct
  }

  public async deleteProduct(id: number): Promise<boolean> {
    const deletedProduct: boolean = await this.productRepository.deleteProduct(
      id
    )
    return deletedProduct
  }
}
