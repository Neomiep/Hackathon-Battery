import SellRepository from './public/homepage/sell-repository.js'
import SellRenderer from './public/homepage/sell-renderer.js'
import EventsHandler from './public/homepage/events-handler.js'

let sellRepository = new SellRepository();
let sellRenderer = new SellRenderer();
let eventsHandler = new EventsHandler(sellRepository,sellRenderer)

eventsHandler.registerAddSell()

