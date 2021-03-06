const express = require ('express');
const bodyParser = require('body-parser');

const path = require ('path');

const routes = require('./routes/index');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'dist')));

app.use('/', routes);


app.listen(3000, function () {
    console.log('Rodando na porta 3000');
});