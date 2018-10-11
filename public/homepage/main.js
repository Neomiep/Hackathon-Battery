import SellRepository from '../repository.js'
import SellRenderer from './renderer.js'
import EventsHandler from './events-handler.js'

let sellRepository = new SellRepository();
let sellRenderer = new SellRenderer();
let eventsHandler = new EventsHandler(sellRepository,sellRenderer)

eventsHandler.onLoadHomepage()
eventsHandler.registerAddSell()
eventsHandler.registerShowBuy()
eventsHandler.deleteSaleAddHistory()
eventsHandler.registerGetHistory()
eventsHandler.logout()
