import Address from './entities/address'
import Customer from './entities/customer'
import Order from './entities/order'
import OrderItem from './entities/order_item'

let customer = new Customer('123', 'Monkey D. Luffy')

const address = new Address('Rua dos Bobos', 0, '98765-432', 'São Paulo')
customer.Address = address
customer.activate()

const item1 = new OrderItem('1', 'Xbox Series X', 5000)
const item2 = new OrderItem('2', 'Playstation 5', 5000)

const order = new Order('1', '123', [item1, item2])
