import SellRepository from '../repository.js'
import SellRenderer from './sell-renderer.js'
import EventsHandler from './events-handler.js'

let sellRepository = new SellRepository();
let sellRenderer = new SellRenderer();
let eventsHandler = new EventsHandler(sellRepository,sellRenderer)

eventsHandler.onLoadHomepage()
eventsHandler.registerAddSell()
eventsHandler.logout()
