/*jslint node: true */
(function () {
    'use strict';
    var Client = require('./teambox/client');

    exports.createClient = function (options) {
        return new Client(options);
    };
}).call(this);
