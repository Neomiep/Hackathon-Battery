import UsersRepository from './repository.js';
import EventsHandler from './events-handler.js';

let UsersRepository = new UsersRepository();
let eventsHandler = new EventsHandler(usersRepository);

eventsHandler.registerAdduser();