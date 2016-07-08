var express = require('express');
var app = express();
var api = require('./api/api');


require('mongoose').connect('mongodb://localhost/newblog');

// setup the app middleware
require('./middleware/appMiddleware')(app);

// setup the api
app.use('/api/', api);


// set up global error handling

// export the app for testing
module.exports = app;
