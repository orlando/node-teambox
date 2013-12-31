/*jslint node: true */
(function () {
    'use strict';
    var Attachments, Attachment, Base;
    Base = require('./base');
    Attachment = require('./attachment');
    Attachments = function Attachments(config) {
        this.init(config);
    };

    Attachments.prototype = Object.create(Base.prototype, {
        init: {
            value: function init(config) {
                Base.prototype.init.call(this, config);
                this.className = "Attachments";
                this.instanceClass = Attachment;
                this.routes = {
                    all: "/api/" + this.apiVersion + "/attachments",
                    find: "/api/" + this.apiVersion + "/attachments/{{id}}"
                };
                return this;
            }
        }
    });

    module.exports = Attachments;
}).call(this);
