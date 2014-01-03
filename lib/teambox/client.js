/*jslint node: true */
(function () {
    'use strict';
    var Teambox, https, querystring;
    https = require('https');
    querystring = require('querystring');

    var Teambox = function Teambox(config) {
        var resources, instances;
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

        resources = {
            Projects: require('./projects'),
            Tasks: require('./tasks'),
            Conversations: require('./conversations'),
            Comments: require('./comments'),
            Attachments: require('./attachments'),
            Activities: require('./activities')
        };

        instances = {
            Project: require('./project'),
            Task: require('./task'),
            Conversation: require('./conversation'),
            Comment: require('./comment'),
            Attachment: require('./attachment'),
            Activity: require('./activity')
        };

        Object.keys(config).forEach(function (key) {
            this.config[key] = config[key];
        }, this);

        Object.keys(resources).forEach(function (key) {
            this[key] = new resources[key]({client: this});
        }, this);

        Object.keys(instances).forEach(function (key) {
            this[key] = instances[key];
        }, this);

        if ((!this.config.username || !this.config.password) && this.config.authType === "http") {
            throw new Error("teambox username and password are required");
        } else if ((!this.config.consumerKey || !this.config.consumerSecret || !this.config.authKey || !this.config.authSecret) && this.config.authType === "oauth") {
            throw new Error("you need to set oauth keys");
        }
    };

    Teambox.prototype._baseRequest = function _baseRequest(args, callback) {
        var teamboxUsername, teamboxPassword, auth, headers, options, request, postData;
        headers = {};
        headers['Accept'] = 'application/json';

        if (this.config.authType === "http") {
            teamboxUsername = this.config.username;
            teamboxPassword = this.config.password;
            auth = 'Basic ' + new Buffer(teamboxUsername + ':' + teamboxPassword).toString('base64');
            headers["Authorization"] = auth;

            if (["PUT", "POST"].indexOf(args.method) > -1) {
                headers["Content-Type"] = 'application/x-www-form-urlencoded';
            }

            options = {
                hostname: "www.teambox.com",
                headers: headers,
                path: args.path,
                _requestBody: args._requestBody,
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
                var response = null;

                if (output.length > 0) {
                    response = JSON.parse(output.join(''));
                }

                callback(null, response);
            });
        });

        request.on("error", function (err) {
            callback(err, null);
        });

        if (["PUT", "POST"].indexOf(options.method) > -1) {
            postData = querystring.stringify(options._requestBody);
            request.write(postData);
        }

        request.end();
    };

    Teambox.prototype.apiVersion = function apiVersion() {
        return this.config.apiVersion;
    };

    module.exports = Teambox;
}).call(this);
