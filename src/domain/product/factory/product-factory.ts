import { v4 as uuid } from 'uuid'
import Product from '../entity/product'
import ProductB from '../entity/product-b'
import ProductInterface from '../entity/product-interface'

export default class ProductFactory {
  static create (type: string, name: string, price: number): ProductInterface {
    switch (type) {
      case 'A':
        return new Product(uuid(), name, price)
      case 'B':
        return new ProductB(uuid(), name, price)
      default:
        if (!type)
          throw new Error('Product type is required')
        throw new Error(`Product type '${type}' is not supported`)
    }
  }
}
