/*jslint node: true */
(function () {
    'use strict';
    var Base = function Base(config) {
        this.init(config);
    };

    Base.prototype = {
        init: function init(config) {
            this.client = config.client;
            this.apiVersion = this.client.apiVersion();
            return this;
        },

        all: function all(callback) {
            var params, base;
            base = this;
            params = {
                path: this.routes.all
            };

            this.client._baseRequest(params, function (err, responseData) {
                var wrappedData;

                if (err) {
                    return callback(err, null);
                }

                wrappedData = responseData.map(function (data) {
                    return base._createInstance({
                        data: data,
                        client: base.client
                    });
                }, this);

                callback(err, wrappedData, responseData);
            });
        },

        find: function find(id, callback) {
            var params, base;
            base = this;
            params = {
                path: this.routes.find.replace("{{id}}", id)
            };

            this.client._baseRequest(params, function (err, responseData) {
                var wrappedData;

                if (err) {
                    return callback(err, null);
                }

                wrappedData = base._createInstance({
                    data: responseData,
                    client: base.client
                });

                callback(err, wrappedData, responseData);
            });
        },

        where: function where(attrs, callback) {
            var params, base, queryString;
            base = this;
            queryString = this._toQueryString(attrs);
            params = {
                path: this.routes.all + "?" + queryString
            };

            this.client._baseRequest(params, function (err, responseData) {
                var wrappedData;

                if (err) {
                    return callback(err, null);
                }

                wrappedData = responseData.map(function (data) {
                    return base._createInstance({
                        data: data,
                        client: base.client
                    });
                }, this);

                callback(err, wrappedData, responseData);
            });
        },

        destroy: function destroy(id, callback) {
        },

        create: function create(attrs) {
        },

        _createInstance: function _createInstance(attrs) {
            return new this.instanceClass(attrs);
        },

        _toQueryString: function _toQueryString(obj) {
            var p, str = [];
            for (p in obj) {
                if (obj.hasOwnProperty(p)) {
                    str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                }
            }
            return str.join("&");
        }
    };

    module.exports = Base;
}).call(this);
