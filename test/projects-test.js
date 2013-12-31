/*jslint node: true */
var nock, sinon, chai, expect, Teambox;
Teambox = require('../lib/teambox');
chai = require('chai');
chai.use(require('sinon-chai'));
expect = chai.expect;
sinon = require('sinon');
nock = require('nock');

describe('Projects', function () {
    it("#all", function () {
        var teambox, scope, teamboxResponse;
        teamboxResponse = [
            {
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
        }
        ];

        scope = nock("https://www.teambox.com").get("/api/2/projects").reply(200, teamboxResponse);
        teambox = Teambox.createClient({bla: 1, username: "bla", password: "bla"});
        teambox.Projects.all(function (err, data, json) {
            expect(data.length).to.equal(1);
            expect(data[0].id).to.equal(825536);
        });
    });

    it("#find", function () {
        var teambox, scope, teamboxResponse;
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

        scope = nock("https://www.teambox.com").get("/api/2/projects/825536").reply(200, teamboxResponse);
        teambox = Teambox.createClient({bla: 1, username: "bla", password: "bla"});
        teambox.Projects.find("825536", function (err, data, json) {
            expect(data.id).to.equal(825536);
        });
    });
});
