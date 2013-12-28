/*jslint node: true */
(function () {
    'use strict';
    var Conversation = function Conversation(data, client) {
        this.client = client;
        this.data = data;
        this.id = data.id;
        this.apiVersion = this.client.apiVersion();
        this.routes = {};
    };

    module.exports = Conversation;
}).call(this);
