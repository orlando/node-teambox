/*jslint node: true */
(function () {
    'use strict';
    var Comments, Comment, Base;
    Base = require('./base');
    Comment = require('./comment');
    Comments = function Comments(config) {
        this.init(config);
    };

    Comments.prototype = Object.create(Base.prototype, {
        init: {
            value: function init(config) {
                Base.prototype.init.call(this, config);
                this.className = "Comments";
                this.instanceClass = Comment;
                this.routes = {
                    all: "/api/" + this.apiVersion + "/comments",
                    find: "/api/" + this.apiVersion + "/comments/{{id}}"
                };
                return this;
            }
        }
    });

    module.exports = Comments;
}).call(this);
