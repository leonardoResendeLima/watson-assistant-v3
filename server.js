'use strict';

require('dotenv-flow').config({
    path : './config/'
})

const log = require('./src/helpers/log')

var port = process.env.PORT || 3000;
var server = require('./src/app');

try {
    server.listen(port, function () {
        log.info(`Server is Running on port: ${port} [${process.env.NODE_ENV}]`)
    });
} catch (ex) {
    console.log(ex)
}

