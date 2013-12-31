/*jslint node: true */
(function () {
    'use strict';
    var Task, Conversation, Activity, Attachment, Project, Instance;
    Conversation = require('./conversation');
    Instance = require('./instance');
    Activity = require('./activity');
    Attachment = require('./attachment');
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
                    tasks: "/api/" + this.apiVersion + "/projects/" + this.id + "/tasks",
                    activities: "/api/" + this.apiVersion + "/projects/" + this.id + "/activities",
                    conversations: "/api/" + this.apiVersion + "/projects/" + this.id + "/conversations",
                    attachments: "/api/" + this.apiVersion + "/projects/" + this.id + "/attachments"
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

                this.client._baseRequest(params, function (err, responseData) {
                    var wrappedData;
                    if (err) {
                        return callback(err, null);
                    }

                    wrappedData = responseData.map(function (data) {
                        return new Task({
                            data: data,
                            client: project.client
                        });
                    }, this);

                    callback(err, wrappedData, responseData);
                });
            }
        },

        activities: {
            value: function activities(callback) {
                var params, project;
                project = this;
                params = {
                    path: this.routes.activities
                };

                this.client._baseRequest(params, function (err, responseData) {
                    var wrappedData;
                    if (err) {
                        return callback(err, null);
                    }

                    wrappedData = responseData.map(function (data) {
                        return new Activity({
                            data: data,
                            client: project.client
                        });
                    }, this);

                    callback(err, wrappedData, responseData);
                });
            }
        },

        conversations: {
            value: function conversations(callback) {
                var params, project;
                project = this;
                params = {
                    path: this.routes.conversations
                };

                this.client._baseRequest(params, function (err, responseData) {
                    var wrappedData;
                    if (err) {
                        return callback(err, null);
                    }

                    wrappedData = responseData.map(function (data) {
                        return new Conversation({
                            data: data,
                            client: project.client
                        });
                    }, this);

                    callback(err, wrappedData, responseData);
                });
            }
        },

        attachments: {
            value: function conversations(callback) {
                var params, project;
                project = this;
                params = {
                    path: this.routes.conversations
                };

                this.client._baseRequest(params, function (err, responseData) {
                    var wrappedData;
                    if (err) {
                        return callback(err, null);
                    }

                    wrappedData = responseData.map(function (data) {
                        return new Attachment({
                            data: data,
                            client: project.client
                        });
                    }, this);

                    callback(err, wrappedData, responseData);
                });
            }
        }
    });

    module.exports = Project;
}).call(this);
