/*jslint node: true */
(function () {
    'use strict';
    var Task = function Task(data, client) {
        this.client = client;
        this.data = data;
        this.id = data.id;
        this.apiVersion = this.client.apiVersion();
        this.routes = {};
    };

    module.exports = Task;
}).call(this);
