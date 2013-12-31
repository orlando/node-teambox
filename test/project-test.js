/*jslint node: true */
var nock, sinon, chai, expect, Teambox;
Teambox = require('../lib/teambox');
chai = require('chai');
chai.use(require('sinon-chai'));
expect = chai.expect;
sinon = require('sinon');
nock = require('nock');

describe('Project', function () {
    it(".tasks", function () {
    });

    it(".fetch", function () {
        var teambox, scope, teamboxResponse, project;
        teambox = Teambox.createClient({bla: 1, username: "bla", password: "bla"});
        teamboxResponse = {
            "type": "Project",
            "created_at": "2013-11-01 02:59:08 +0000",
            "updated_at": "2013-11-01 02:59:08 +0000",
            "id": 825536,
            "permalink": "scrum-f77ht",
            "organization_id": 313910,
            "archived": false,
            "name": "SCRUM",
            "tracks_time": false,
            "public": null,
            "publish_pages": false,
            "settings": {
                "include_weekend_days": false
            },
            "metadata": {},
            "deleted": false
        };

        project = new teambox.Project({
            id: 825536,
            client: teambox
        });

        scope = nock("https://www.teambox.com").get("/api/2/projects/825536").reply(200, teamboxResponse);
        expect(project.data).to.be.undefined;
        project.fetch(function (err, project) {
            expect(project.data.name).to.equal("SCRUM");
        });
    });
});
