// required modules.
const path = require('path');
const express = require('express');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const pageNotFound = require('./routes/404');

const app = express();
const port = 3000;
const bodyParser = require('body-parser');
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: false}));

app.use('/admin', adminRoutes)
app.use(shopRoutes)
app.use(pageNotFound)

app.listen(port)