import OrderItem from './order_item'

export default class Order {
  private readonly _id: string
  private readonly _customerId: string
  private readonly _items: OrderItem[]
  private readonly _total: number

  constructor (id: string, customerId: string, items: OrderItem[]) {
    this._id = id
    this._customerId = customerId
    this._items = items
    this._total = this.total()
    this.validate()
  }

  validate (): boolean {
    if (!this._id) throw new Error('Order id is required')
    if (!this._customerId) throw new Error('Order customerId is required')
    if (!this._items.length) throw new Error('Order items is required')
    if (this._items.some(item => item.quantity <= 0)) throw new Error('Order items quantity must be greater than zero')

    return true
  }

  total (): number {
    return this._items.reduce((acc, item) => acc + item.price, 0)
  }
}