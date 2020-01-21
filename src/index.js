require('dotenv/config');

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const app = express();

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(cors());
app.use(express.json());
app.use(routes);

// Métodos Http: GET, POST, PUT, DELETE

// Tipos de parâmetros

// Query Params: request.query (Filtros, ordenação, paginação...)
// Route Params: request.params (Identificar um recurso na alteração ou demoção)
// Body: request.body (Dados para criação ou alteração de um registro)

app.listen(process.env.PORT || 3333);
