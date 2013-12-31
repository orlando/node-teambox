/*jslint node: true */
(function () {
    'use strict';
    var Comment, Instance;
    Instance = require("./instance");
    Comment = function Comment(config) {
        this.init(config);
    };

    Comment.prototype = Object.create(Instance.prototype, {
        init: {
            value: function init(config) {
                Instance.prototype.init.call(this, config);
                this.routes = {
                    fetch: "/api/" + this.apiVersion + "/comments/" + this.id
                };
            }
        }
    });

    module.exports = Comment;
}).call(this);
