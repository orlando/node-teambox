/*jslint node: true */
(function () {
    'use strict';
    var Instance = function Instance(config) {
        this.init(config);
    };

    Instance.prototype = {
        init: function init(config) {
            this.client = config.client;
            this.data = config.data;
            this.id = this.data.id;
            this.apiVersion = this.client.apiVersion();
            this.routes = {};
            return this;
        },

        fetch: function fetch(callback) {
        },

        updateAttribute: function updateAttribute() {
        },

        updateAttributes: function updateAttributes() {
        }
    };

    module.exports = Instance;
}).call(this);
