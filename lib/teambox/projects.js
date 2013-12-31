/*jslint node: true */
(function () {
    'use strict';
    var Project, Projects, Base;
    Base = require('./base');
    Project = require('./project');
    Projects = function Projects(config) {
        this.init(config);
    };

    Projects.prototype = Object.create(Base.prototype, {
        init: {
            value: function init(config) {
                Base.prototype.init.call(this, config);
                this.className = "Projects";
                this.instanceClass = Project;
                this.routes = {
                    all: "/api/" + this.apiVersion + "/projects",
                    find: "/api/" + this.apiVersion + "/projects/{{id}}"
                };
                return this;
            }
        }
    });

    module.exports = Projects;
}).call(this);
