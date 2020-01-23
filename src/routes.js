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
routes.delete('/devs/:github_username', DevController.destroy);

routes.get('/search', SearchController.index);

module.exports = routes;