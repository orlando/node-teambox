/*jslint node: true */
(function () {
    'use strict';
    var Tasks, Task;
    Task = require('./task');
    Tasks = function Tasks(client) {
        this.client = client;
        this.apiVersion = this.client.apiVersion();
        this.routes = {
            all: "/api/" + this.apiVersion + "/tasks",
            find: "/api/" + this.apiVersion + "/tasks/{{id}}"
        };
    };

    Tasks.prototype.all = function all(callback) {
        var params, tasks;
        tasks = this;
        params = {
            path: this.routes.all
        };

        this.client._baseRequest(params, function (err, data) {
            var wrappedData;

            if (err) {
                return callback(err, null);
            }

            wrappedData = data.map(function (task) {
                return new Task(task, tasks.client);
            }, this);

            callback(err, wrappedData, data);
        });
    };

    Tasks.prototype.find = function find(id, callback) {
        var params, tasks;
        tasks = this;
        params = {
            path: this.routes.find.replace("{{id}}", id)
        };

        this.client._baseRequest(params, function (err, data) {
            var wrappedData;

            if (err) {
                return callback(err, null);
            }

            wrappedData = new Task(data, tasks.client);

            callback(err, wrappedData, data);
        });
    };

    module.exports = Tasks;
}).call(this);
