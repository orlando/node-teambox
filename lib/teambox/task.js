/*jslint node: true */
(function () {
    'use strict';
    var Task, Instance;
    Instance = require("./instance");
    Task = function Task(config) {
        this.init(config);
    };

    Task.prototype = Object.create(Instance.prototype, {
        init: {
            value: function init(config) {
                Instance.prototype.init.call(this, config);
                this.routes = {
                    fetch: "/api/" + this.apiVersion + "/tasks/" + this.id
                };
            }
        }
    });

    module.exports = Task;
}).call(this);
