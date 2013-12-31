/*jslint node: true */
(function () {
    'use strict';
    var Activities, Activity, Base;
    Base = require('./base');
    Activity = require('./activity');
    Activities = function Activities(config) {
        this.init(config);
    };

    Activities.prototype = Object.create(Base.prototype, {
        init: {
            value: function init(config) {
                Base.prototype.init.call(this, config);
                this.className = "Activities";
                this.instanceClass = Activity;
                this.routes = {
                    all: "/api/" + this.apiVersion + "/activities",
                    find: "/api/" + this.apiVersion + "/activities/{{id}}"
                };
                return this;
            }
        }
    });

    module.exports = Activities;
}).call(this);
