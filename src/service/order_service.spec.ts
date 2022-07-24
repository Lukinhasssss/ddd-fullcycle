import Order from '../entities/order'
import OrderItem from '../entities/order_item'
import OrderService from './order_service'

describe('Order service unit tests', () => {
  test('should get total of all orders', () => {
    const item1 = new OrderItem('1', 'Item 1', 100, '1', 1)
    const item2 = new OrderItem('2', 'Item 2', 320, '1', 2)

    const order1 = new Order('1', '1', [item1])
    const order2 = new Order('2', '1', [item2])

    const total = OrderService.total([order1, order2])

    expect(total).toBe(740)
  })
})
