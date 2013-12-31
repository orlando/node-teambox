/*jslint node: true */
(function () {
    'use strict';
    var Task, Project, Instance;
    Instance = require('./instance');
    Task = require('./task');
    Project = function Project(config) {
        this.init(config);
    };

    Project.prototype = Object.create(Instance.prototype, {
        init: {
            value: function init(config) {
                Instance.prototype.init.call(this, config);
                this.routes = {
                    fetch: "/api/" + this.apiVersion + "/projects/" + this.id,
                    tasks: "/api/" + this.apiVersion + "/projects/" + this.id + "/tasks"
                };
            }
        },

        tasks: {
            value: function tasks(callback) {
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
            }
        }
    });

    module.exports = Project;
}).call(this);
