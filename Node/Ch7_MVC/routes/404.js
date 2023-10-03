const path = require('path');
const rootDir = require('../util/path')
const express = require('express');
const router = express.Router();
const ErroController = require('../controllers/404');
const { errorMonitor } = require('events');

router.use(ErroController.get404Page);

module.exports = router;