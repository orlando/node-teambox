/*jslint node: true */
(function () {
    'use strict';
    var Conversation, Instance;
    Instance = require("./instance");
    Conversation = function Conversation(config) {
        this.init(config);
    };

    Conversation.prototype = Object.create(Instance.prototype, {
        init: {
            value: function init(config) {
                Instance.prototype.init.call(this, config);
            }
        }
    });

    module.exports = Conversation;
}).call(this);
