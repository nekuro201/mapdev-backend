const {Router} = require('express');
const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');

const routes = Router();

// TESTE
routes.post('/users', (request, response) => {
  console.log(request.body);
  return response.json({ message: 'Hello Omnistack' });
});

// DEVS
routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);

routes.get('/search', SearchController.index);

module.exports = routes;