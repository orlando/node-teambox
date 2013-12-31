/*jslint node: true */
(function () {
    'use strict';
    var Task, Project;

    Task = require('./task');
    Project = function Project(config) {
        this.client = config.client;
        this.data = config.data;
        this.id = this.data.id;
        this.apiVersion = this.client.apiVersion();
        this.routes = {
            fetch: "/api/" + this.apiVersion + "/projects/" + this.id,
            tasks: "/api/" + this.apiVersion + "/projects/" + this.id + "/tasks"
        };
    };

    Project.prototype = {
        tasks: function tasks(callback) {
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
        },

        fetch : function fetch(callback) {
        }
    };

    module.exports = Project;
}).call(this);
