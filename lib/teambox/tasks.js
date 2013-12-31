/*jslint node: true */
(function () {
    'use strict';
    var Tasks, Task, Base;
    Base = require('./base');
    Task = require('./task');
    Tasks = function Tasks(config) {
        this.init(config);
    };

    Tasks.prototype = Object.create(Base.prototype, {
        init: {
            value: function init(config) {
                Base.prototype.init.call(this, config);
                this.className = "Tasks";
                this.instanceClass = Task;
                this.routes = {
                    all: "/api/" + this.apiVersion + "/tasks",
                    find: "/api/" + this.apiVersion + "/tasks/{{id}}"
                };
                return this;
            }
        }
    });

    module.exports = Tasks;
}).call(this);
