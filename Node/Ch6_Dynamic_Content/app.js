// required modules.
const path = require('path');
const express = require('express');
const { engine } = require('express-handlebars');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;
app.engine('hbs', engine({extname: 'hbs', defaultLayout: false}));
app.set('view engine', 'hbs');
// app.set('view engine', 'pug')
app.set('views', 'views')

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const pageNotFound = require('./routes/404');


app.use(bodyParser.urlencoded({ extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes)
app.use(shopRoutes)
app.use(pageNotFound)

app.listen(port)