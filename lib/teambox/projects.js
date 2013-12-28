/*jslint node: true */
(function () {
    'use strict';
    var Projects = function Projects(client) {
        this.client = client;
        this.apiVersion = this.client.apiVersion();
        this.routes = {
            all: "/api/" + this.apiVersion + "/projects",
            find: "/api/" + this.apiVersion + "/projects/{{id}}"
        };
    };

    Projects.prototype.all = function all(callback) {
        var params = {
            path: this.routes.all
        };

        this.client._baseRequest(params, callback);
    };

    Projects.prototype.find = function find(id, callback) {
        var params = {
            path: this.routes.find.replace("{{id}}", id)
        };

        this.client._baseRequest(params, callback);
    };

    module.exports = Projects;
}).call(this);
