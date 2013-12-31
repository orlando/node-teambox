/*jslint node: true */
(function () {
    'use strict';
    var Attachment, Instance;
    Instance = require("./instance");
    Attachment = function Attachment(config) {
        this.init(config);
    };

    Attachment.prototype = Object.create(Instance.prototype, {
        init: {
            value: function init(config) {
                Instance.prototype.init.call(this, config);
                this.routes = {
                    fetch: "/api/" + this.apiVersion + "/attachments/" + this.id
                };
            }
        }
    });

    module.exports = Attachment;
}).call(this);
