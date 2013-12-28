/*jslint node: true */
(function () {
    'use strict';
    var Task, Project;

    Task = require('./task');
    Project = function Project(data, client) {
        this.client = client;
        this.data = data;
        this.id = data.id;
        this.apiVersion = this.client.apiVersion();
        this.routes = {
            tasks: "/api/" + this.apiVersion + "/projects/" + this.id + "/tasks"
        };
    };

    Project.prototype.tasks = function tasks(callback) {
        var params, project;
        project = this;
        params = {
            path: this.routes.tasks
        };

        this.client._baseRequest(params, function (err, tasks) {
            var wrappedTasks;
            if (err) {
                return callback(err, null);
            }

            wrappedTasks = tasks.map(function (task) {
                return new Task(task, project.client);
            }, this);

            callback(err, wrappedTasks, tasks);
        });
    };

    module.exports = Project;
}).call(this);
