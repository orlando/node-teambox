/*jslint node: true */
(function () {
    'use strict';
    var Tasks = function Tasks(client) {
        this.client = client;
        this.apiVersion = this.client.apiVersion();
        this.routes = {
            all: "/api/" + this.apiVersion + "/tasks",
            find: "/api/" + this.apiVersion + "/tasks/{{id}}"
        };
    };

    Tasks.prototype.all = function all(callback) {
        var params = {
            path: this.routes.all
        };

        this.client._baseRequest(params, callback);
    };

    Tasks.prototype.find = function find(id, callback) {
        var params = {
            path: this.routes.find.replace("{{id}}", id)
        };

        this.client._baseRequest(params, callback);
    };

    module.exports = Tasks;
}).call(this);
