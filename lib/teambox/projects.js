/*jslint node: true */
(function () {
    'use strict';
    var Project, Projects;
    Project = require('./project');
    Projects = function Projects(client) {
        this.client = client;
        this.apiVersion = this.client.apiVersion();
        this.routes = {
            all: "/api/" + this.apiVersion + "/projects",
            find: "/api/" + this.apiVersion + "/projects/{{id}}"
        };
    };

    Projects.prototype.all = function all(callback) {
        var params, projects;
        projects = this;
        params = {
            path: this.routes.all
        };

        this.client._baseRequest(params, function (err, data) {
            var wrappedData;

            if (err) {
                return callback(err, null);
            }

            wrappedData = data.map(function (project) {
                return new Project(project, projects.client);
            }, this);

            callback(err, wrappedData, data);
        });
    };

    Projects.prototype.find = function find(id, callback) {
        var params, projects;
        projects = this;
        params = {
            path: this.routes.find.replace("{{id}}", id)
        };

        this.client._baseRequest(params, function (err, data) {
            var wrappedData;

            if (err) {
                return callback(err, null);
            }

            wrappedData = new Project(data, projects.client);

            callback(err, wrappedData, data);
        });
    };

    module.exports = Projects;
}).call(this);
