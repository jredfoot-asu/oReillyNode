// Not using express
const http = require('http');
const routes = require('./routes')

// function reqListener(req, res) {

// }

const server = http.createServer(routes.handler)

server.listen(3000);