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
                    fetch: "/api/" + this.apiVersion + "/conversations/" + this.id,
                    comments: "/api/" + this.apiVersion + "/conversations/" + this.id + "/comments"
                };
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

    module.exports = Conversation;
}).call(this);
