/*jslint node: true */
(function () {
    'use strict';
    var extend, Instance;
    extend = require('util')._extend;
    Instance = function Instance(config) {
        this.init(config);
    };

    Instance.prototype = {
        init: function init(config) {
            this.client = config.client;
            this.data = config.data;
            this.id = config.id || this.data.id;
            this.apiVersion = this.client.apiVersion();
            this.routes = {};
            return this;
        },

        fetch: function fetch(callback) {
            var params, instance;
            instance = this;
            params = {
                path: this.routes.fetch
            };

            this.client._baseRequest(params, function (err, responseData) {
                var wrappedData;

                if (err) {
                    return callback(err, null);
                }

                instance.data = extend(instance.data || {}, responseData);

                callback(err, instance);
            });
        },

        destroy: function destroy(callback) {
            var params, instance;
            instance = this;
            params = {
                method: "DELETE",
                path: this.routes.fetch
            };

            this.client._baseRequest(params, function (err, responseData) {
                if (err) {
                    return callback(err, null);
                }

                callback(err, responseData);
            });

        },

        updateAttributes: function updateAttributes(attrs, callback) {
            var params, instance;
            instance = this;
            params = {
                method: "PUT",
                path: this.routes.fetch,
                _requestBody: attrs
            };

            this.client._baseRequest(params, function (err, responseData) {
                if (err) {
                    return callback(err, null);
                }

                instance.data = extend(instance.data || {}, responseData);

                callback(err, instance, responseData);
            });
        },

        update: function update(callback) {
            var params, instance;
            instance = this;
            params = {
                method: "PUT",
                path: this.routes.fetch,
                _requestBody: this.data
            };

            this.client._baseRequest(params, function (err, responseData) {
                if (err) {
                    return callback(err, null);
                }

                instance.data = extend(instance.data || {}, responseData);

                callback(err, instance, responseData);
            });
        }
    };

    module.exports = Instance;
}).call(this);
