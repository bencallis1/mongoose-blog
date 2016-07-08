// intro point for our server.
// PRO-TIP: if you have an index.js file
// on the root of a folder in node
// you can just require that folder and node will
// automatically require the index.js on the root

// setup config first before anything by requiring it

// dont worry about the config use it for refrence later
var config = require('./server/config/config');



var app = require('./server/server');

// Logger is just making helpful console logs for us
var logger = require('./server/util/logger');

app.listen(config.port);

logger.log('listening on http://localhost:' + config.port);



