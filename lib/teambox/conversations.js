/*jslint node: true */
(function () {
    'use strict';
    var Conversations = function Conversations(client) {
        this.client = client;
        this.apiVersion = this.client.apiVersion();
        this.routes = {
            all: "/api/" + this.apiVersion + "/conversations",
            find: "/api/" + this.apiVersion + "/conversations/{{id}}"
        };
    };

    Conversations.prototype.all = function all(callback) {
        var params = {
            path: this.routes.all
        };

        this.client._baseRequest(params, callback);
    };

    Conversations.prototype.find = function find(id, callback) {
        var params = {
            path: this.routes.find.replace("{{id}}", id)
        };

        this.client._baseRequest(params, callback);
    };

    module.exports = Conversations;
}).call(this);
