/*jslint node: true */
(function () {
    'use strict';
    var Task, Conversation, Comment, Activity, Attachment, Project, Instance;
    Comment = require('./comment');
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
                    attachments: "/api/" + this.apiVersion + "/projects/" + this.id + "/attachments",
                    comments: "/api/" + this.apiVersion + "/projects/" + this.id + "/comments"
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
                    path: this.routes.attachments
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
        },

        comments: {
            value: function comments(callback) {
                var params, instance;
                instance = this;
                params = {
                    path: this.routes.comments
                };

                this.client._baseRequest(params, function (err, responseData) {
                    var wrappedData;
                    if (err) {
                        return callback(err, null);
                    }

                    wrappedData = responseData.map(function (data) {
                        return new Comment({
                            data: data,
                            client: instance.client
                        });
                    }, this);

                    callback(err, wrappedData, responseData);
                });
            }
        },

        createComment: {
            value: function createComment(args, callback) {
                var params, instance;
                instance = this;
                params = {
                    method: "POST",
                    path: this.routes.comments,
                    _requestBody: args
                };

                this.client._baseRequest(params, function (err, responseData) {
                    var comment;
                    if (err) {
                        return callback(err, null);
                    }

                    comment = new Comment({
                        data: responseData,
                        client: instance.client
                    });


                    callback(err, comment, responseData);
                });
            }
        }
    });

    module.exports = Project;
}).call(this);
