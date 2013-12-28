/*jslint node: true */
(function () {
    'use strict';
    var Conversations, Conversation;
    Conversation = require('./conversation');
    Conversations = function Conversations(client) {
        this.client = client;
        this.apiVersion = this.client.apiVersion();
        this.routes = {
            all: "/api/" + this.apiVersion + "/conversations",
            find: "/api/" + this.apiVersion + "/conversations/{{id}}"
        };
    };

    Conversations.prototype.all = function all(callback) {
        var params, conversations;
        conversations = this;
        params = {
            path: this.routes.all
        };

        this.client._baseRequest(params, function (err, data) {
            var wrappedData;

            if (err) {
                return callback(err, null);
            }

            wrappedData = data.map(function (task) {
                return new Conversation(task, conversations.client);
            }, this);

            callback(err, wrappedData, data);
        });
    };

    Conversations.prototype.find = function find(id, callback) {
        var params, conversations;
        conversations = this;
        params = {
            path: this.routes.find.replace("{{id}}", id)
        };

        this.client._baseRequest(params, function (err, data) {
            var wrappedData;

            if (err) {
                return callback(err, null);
            }

            wrappedData = new Conversation(data, conversations.client);

            callback(err, wrappedData, data);
        });
    };

    module.exports = Conversations;
}).call(this);
