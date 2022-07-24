import Order from './order'
import OrderItem from './order_item'

describe('Order unit tests', () => {
  test('should throw an error when id is empty', () => {
    expect(() => new Order('', '1', [])).toThrowError('Order id is required')
  })

  test('should throw an error when customerId is empty', () => {
    expect(() => new Order('1', '', [])).toThrowError('Order customerId is required')
  })

  test('should throw an error when items is empty', () => {
    expect(() => new Order('1', '1', [])).toThrowError('Order items is required')
  })

  test('should calculate total', () => {
    const item1 = new OrderItem('1', 'Item 1', 100)
    const item2 = new OrderItem('1', 'Item 1', 320)
    const order = new Order('1', '1', [item1, item2])

    const total = order.total()

    expect(total).toBe(420)
  })
})
