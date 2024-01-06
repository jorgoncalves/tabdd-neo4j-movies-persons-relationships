const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');

const MoviesRoutes = require('./routes/MoviesRoutes');
const PersonsRoutes = require('./routes/PersonsRoutes');

const app = express();

app.use(cors("http://localhost:3000"));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', MoviesRoutes.router);
app.use('/', PersonsRoutes.router);

app.listen(8080, () => {
    console.log('Server listening on port 8080');
});
