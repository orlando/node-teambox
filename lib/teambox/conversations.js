/*jslint node: true */
(function () {
    'use strict';
    var Conversations, Conversation, Base;
    Base = require('./base');
    Conversation = require('./conversation');
    Conversations = function Conversations(config) {
        this.init(config);
    };

    Conversations.prototype = Object.create(Base.prototype, {
        init: {
            value: function init(config) {
                Base.prototype.init.call(this, config);
                this.className = "Conversations";
                this.instanceClass = Conversation;
                this.routes = {
                    all: "/api/" + this.apiVersion + "/conversations",
                    find: "/api/" + this.apiVersion + "/conversations/{{id}}"
                };
                return this;
            }
        }
    });

    module.exports = Conversations;
}).call(this);
