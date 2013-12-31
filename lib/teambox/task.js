/*jslint node: true */
(function () {
    'use strict';
    var Task = function Task(config) {
        this.client = config.client;
        this.data = config.data;
        this.id = this.data.id;
        this.apiVersion = this.client.apiVersion();
        this.routes = {};
    };

    module.exports = Task;
}).call(this);
