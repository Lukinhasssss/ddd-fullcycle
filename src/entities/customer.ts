export default class Customer {
  _id: string
  _name: string = ''
  _address: string = ''
  _active: boolean = false

  constructor (id: string, name: string) {
    this._id = id
    this._name = name
    this.validate()
  }

  validate (): void {
    if (!this._id) throw new Error('Customer id is required')

    if (!this._name) throw new Error('Customer name is required')

    if (!this._address) throw new Error('Customer address is required')
  }

  changeName (name: string): void {
    this._name = name
    this.validate()
  }

  activate (): void {
    if (!this._address) throw new Error('Address is mandatory to activate customer')
    this._active = true
  }

  deactivate (): void {
    this._active = false
  }
}
