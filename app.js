'use strict';

const express = require('express');
const { router } = require('./router');
const app = express();
const port = process.env.PORT || 3000;
const db = require('./db/connect');
const { errorHandler } = require('./middlewares/errorHandler');

// set the view engine to ejs
app.set('view engine', 'ejs');


app.use(express.json());
app.use(router);
app.use(errorHandler);

// start server
if (process.env.NODE_ENV != 'test') {
    db.connect();
    app.listen(port);
    console.log('Express started. Listening on %s', port);
}
exports.app = app;
