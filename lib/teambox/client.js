/*jslint node: true */
(function () {
    'use strict';
    var Teambox, https;
    https = require('https');

    var Teambox = function Teambox(config) {
        var endpoints;
        config || (config = {});

        this.config = {
            apiVersion: "2",
            authType: "http", // http || oauth
            username: null,
            password: null,
            consumerKey: null,
            consumerSecret: null,
            authKey: null,
            authSecret: null
        };

        endpoints = {
            Projects: require('./projects'),
            Tasks: require('./tasks'),
            Conversations: require('./conversations')
        };

        Object.keys(config).forEach(function (key) {
            this.config[key] = config[key];
        }, this);

        Object.keys(endpoints).forEach(function (key) {
            this[key] = new endpoints[key](this);
        }, this);

        if ((!this.config.username || !this.config.password) && this.config.authType === "http") {
            throw new Error("teambox username and password are required");
        } else if ((!this.config.consumerKey || !this.config.consumerSecret || !this.config.authKey || !this.config.authSecret) && this.config.authType === "oauth") {
            throw new Error("you need to set oauth keys");
        }
    };

    Teambox.prototype._baseRequest = function _baseRequest(args, callback) {
        var teamboxUsername, teamboxPassword, auth, headers, options, request;
        headers = {};
        headers['Accept'] = 'application/json';

        if (this.config.authType === "http") {
            teamboxUsername = this.config.username;
            teamboxPassword = this.config.password;
            auth = 'Basic ' + new Buffer(teamboxUsername + ':' + teamboxPassword).toString('base64');
            headers["Authorization"] = auth;

            options = {
                hostname: "www.teambox.com",
                headers: headers,
                path: args.path,
                method: args.method || "GET"
            };
        } else {
            throw "oauth, not implemented yet";
        }

        request = https.request(options, function (res) {
            var output = [];

            res.on("data", function (data) {
                output.push(data);
            });

            res.on("end", function () {
                callback(null, JSON.parse(output.join('')));
            });
        });

        request.on("error", function (err) {
            callback(err, null);
        });

        request.end();
    };

    Teambox.prototype.apiVersion = function apiVersion() {
        return this.config.apiVersion;
    };

    module.exports = Teambox;
}).call(this);
