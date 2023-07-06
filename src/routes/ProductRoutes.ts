import express, { Router } from 'express'
import { ProductController } from '../controllers/productController'

const productRoutes: Router = express.Router()
const productController: ProductController = new ProductController()

productRoutes.post('/products', (req, res) => {
  productController.createProduct(req, res)
})

productRoutes.get('/products/:id', (req, res) => {
  productController.getProduct(req, res)
})

productRoutes.put('/products/:id', (req, res) => {
  productController.updateProduct(req, res)
})

productRoutes.delete('/products/:id', (req, res) => {
  productController.deleteProduct(req, res)
})

export default productRoutes
