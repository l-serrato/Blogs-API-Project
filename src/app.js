const express = require('express');
const controllers = require('./controllers');
const middlewares = require('./middlewares');

// ...

const app = express();
app.use(express.json());

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.post('/login', controllers.login);
app.post('/user', controllers.createUser);
app.get('/user', middlewares.auth, controllers.getUsers);
app.get('/user/:id', middlewares.auth, controllers.getByUserId);
app.post('/categories', middlewares.auth, controllers.createCategory);
app.get('/categories', middlewares.auth, controllers.getCategories);
app.use(middlewares.error);
// 
// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
