import EventInterface from '../@shared/event-interface'

export default class ProductCreatedEvent implements EventInterface {
  eventData: any
  dataTimeOccurred: Date

  constructor (eventData: any) {
    this.eventData = eventData
    this.dataTimeOccurred = new Date()
  }
}
