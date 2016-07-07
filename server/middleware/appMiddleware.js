var morgan = require('morgan');
var bodyParser = require('body-parser');


// setup global middleware here
// Remember we need to export our middleware so we can require elsewhere in our app
// If you look in server.js you will see where we are requiring the middleware
module.exports = function(app) {
    app.use(morgan('dev'));
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
};

