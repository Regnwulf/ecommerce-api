import { Product } from '../../src/models/Product'

export class ProductRepository {
  private products: Product[]

  constructor() {
    this.products = []
  }

  public async createProduct(product: Product): Promise<Product> {
    const newProduct: Product = { ...product, id: this.generateProductId() }
    this.products.push(newProduct)
    return newProduct
  }

  public async getProduct(id: number): Promise<Product | undefined> {
    const product: Product | undefined = this.products.find((p) => p.id === id)
    return product
  }

  public async updateProduct(
    id: number,
    name: string,
    price: number,
    description: string
  ): Promise<Product | undefined> {
    const productIndex: number = this.products.findIndex((p) => p.id === id)
    if (productIndex !== -1) {
      const updatedProduct: Product = {
        ...this.products[productIndex],
        name,
        price,
        description,
      }
      this.products[productIndex] = updatedProduct
      return updatedProduct
    }
    return undefined
  }

  public async deleteProduct(id: number): Promise<boolean> {
    const productIndex: number = this.products.findIndex((p) => p.id === id)
    if (productIndex !== -1) {
      this.products.splice(productIndex, 1)
      return true
    }
    return false
  }

  private generateProductId(): number {
    const lastProductId: number =
      this.products.length > 0
        ? this.products[this.products.length - 1].id + 1
        : 1
    return lastProductId
  }
}
