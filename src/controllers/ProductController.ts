import { Request, Response } from 'express'
import { ProductService } from '../../src/services/ProductService'
import { Product } from '../../src/models/Product'

export class ProductController {
  private productService: ProductService

  constructor() {
    this.productService = new ProductService()
  }

  public async createProduct(req: Request, res: Response): Promise<void> {
    try {
      const { name, price, description } = req.body
      const product: Product = { id: 0, name, price, description }
      const createdProduct = await this.productService.createProduct(product)
      res.status(201).json(createdProduct)
    } catch (error) {
      res.status(500).json({ error: 'Failed to create product' })
    }
  }

  public async getProduct(req: Request, res: Response): Promise<void> {
    try {
      const productId: number = parseInt(req.params.id, 10)
      const product = await this.productService.getProduct(productId)
      if (product) {
        res.json(product)
      } else {
        res.status(404).json({ error: 'Product not found' })
      }
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch product' })
    }
  }

  public async updateProduct(req: Request, res: Response): Promise<void> {
    try {
      const productId: number = parseInt(req.params.id, 10)
      const { name, price, description } = req.body
      const updatedProduct = await this.productService.updateProduct(
        productId,
        name,
        price,
        description
      )
      if (updatedProduct) {
        res.json(updatedProduct)
      } else {
        res.status(404).json({ error: 'Product not found' })
      }
    } catch (error) {
      res.status(500).json({ error: 'Failed to update product' })
    }
  }

  public async deleteProduct(req: Request, res: Response): Promise<void> {
    try {
      const productId: number = parseInt(req.params.id, 10)
      const deletedProduct = await this.productService.deleteProduct(productId)
      if (deletedProduct) {
        res.sendStatus(204)
      } else {
        res.status(404).json({ error: 'Product not found' })
      }
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete product' })
    }
  }
}
