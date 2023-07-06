export interface Product {
  id: number
  name: string
  price: number
  description: string
}

export class ProductModel implements Product {
  id: number
  name: string
  price: number
  description: string

  constructor(name: string, price: number, description: string) {
    this.id = 0
    this.name = name
    this.price = price
    this.description = description
  }
}
