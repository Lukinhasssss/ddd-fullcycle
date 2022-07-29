import Order from '../../domain/entities/order'
import OrderItem from '../../domain/entities/order_item'
import OrderRepositoryInterface from '../../domain/repository/order-repository-interface'
import OrderItemModel from '../db/sequelize/model/order-item-model'
import OrderModel from '../db/sequelize/model/order-model'

export default class OrderRepository implements OrderRepositoryInterface {
  async create (entity: Order): Promise<void> {
    await OrderModel.create(
      {
        id: entity.id,
        customerId: entity.customerId,
        total: entity.total(),
        items: entity.items.map(item => ({
          id: item.id,
          name: item.name,
          price: item.price,
          productId: item.productId,
          quantity: item.quantity
        }))
      },
      {
        include: [{ model: OrderItemModel }]
      }
    )
  }

  async update (entity: Order): Promise<void> {
    throw new Error('Method not implemented.')
  }

  async findById (id: string): Promise<Order> {
    const order = await OrderModel.findOne({
      where: { id },
      include: [{ model: OrderItemModel }]
    })

    return new Order(
      order.id,
      order.customerId,
      order.items.map(item => new OrderItem(
        item.id,
        item.name,
        item.price,
        item.productId,
        item.quantity
      ))
    )
  }

  async findAll (): Promise<Order[]> {
    const orders = await OrderModel.findAll({
      include: ['items']
    })

    return orders.map(order => new Order(
      order.id,
      order.customerId,
      order.items.map(item => new OrderItem(
        item.id,
        item.name,
        item.price,
        item.productId,
        item.quantity
      ))
    ))
  }
}
