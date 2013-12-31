/*jslint node: true */
(function () {
    'use strict';
    var Activity, Instance;
    Instance = require("./instance");
    Activity = function Activity(config) {
        this.init(config);
    };

    Activity.prototype = Object.create(Instance.prototype, {
        init: {
            value: function init(config) {
                Instance.prototype.init.call(this, config);
                this.routes = {
                    fetch: "/api/" + this.apiVersion + "/activities/" + this.id
                };
            }
        }
    });

    module.exports = Activity;
}).call(this);
