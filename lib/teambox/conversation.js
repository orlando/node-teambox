/*jslint node: true */
(function () {
    'use strict';
    var Conversation, Comment, Instance;
    Comment = require("./comment");
    Instance = require("./instance");
    Conversation = function Conversation(config) {
        this.init(config);
    };

    Conversation.prototype = Object.create(Instance.prototype, {
        init: {
            value: function init(config) {
                Instance.prototype.init.call(this, config);
                this.routes = {
                    fetch: "/api/" + this.apiVersion + "/tasks/" + this.id,
                    comments: "/api/" + this.apiVersion + "/tasks/" + this.id + "/comments"
                };
            }
        },

        comments: {
            value: function comments(callback) {
                var params, project;
                project = this;
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
                            client: project.client
                        });
                    }, this);

                    callback(err, wrappedData, responseData);
                });
            }
        }
    });

    module.exports = Conversation;
}).call(this);
