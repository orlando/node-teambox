/*jslint node: true */
var nock, sinon, chai, expect, Teambox;
Teambox = require('../lib/teambox');
chai = require('chai');
chai.use(require('sinon-chai'));
expect = chai.expect;
sinon = require('sinon');
nock = require('nock');

describe('Task', function () {
    it(".destroy", function () {
        var teambox, scope, teamboxResponse, project;
        teambox = Teambox.createClient({bla: 1, username: "bla", password: "bla"});

        task = new teambox.Task({
            id: 8917310,
            client: teambox
        });

        scope = nock("https://www.teambox.com").intercept("/api/2/tasks/8917310", "DELETE").reply(204);

        task.destroy(function (err, response) {
            expect(response).to.be.null;
        });
    });
});
