/*jslint node: true */
var nock, sinon, chai, expect, Teambox;
Teambox = require('../lib/teambox');
chai = require('chai');
chai.use(require('sinon-chai'));
expect = chai.expect;
sinon = require('sinon');
nock = require('nock');

describe('Conversations', function () {
    it("#all", function () {
        var teambox, scope, teamboxResponse;
        teamboxResponse = [
            {
            "type": "Conversation",
            "created_at": "2013-12-27 15:12:36 +0000",
            "updated_at": "2013-12-27 15:12:38 +0000",
            "hidden_comments_count": 0,
            "first_comment": {
                "type": "Comment",
                "created_at": "2013-12-27 15:12:37 +0000",
                "updated_at": "2013-12-27 15:12:37 +0000",
                "id": 26264289,
                "body": "",
                "body_html": "<p></p>",
                "user_id": 779107,
                "project_id": 825536,
                "target_id": 804377,
                "target_type": "Conversation",
                "hours": null,
                "time_tracking_at": "2013-12-27",
                "upload_ids": [],
                "assigned_id": null,
                "previous_assigned_id": null,
                "status": null,
                "previous_status": null,
                "due_on": null,
                "previous_due_on": null,
                "is_private": false,
                "previous_is_private": null,
                "urgent": false,
                "previous_urgent": false,
                "metadata": {},
                "uploads": [],
                "attachments": []
            },
            "recent_comments": [
                {
                "type": "Comment",
                "created_at": "2013-12-27 15:12:37 +0000",
                "updated_at": "2013-12-27 15:12:37 +0000",
                "id": 26264289,
                "body": "",
                "body_html": "<p></p>",
                "user_id": 779107,
                "project_id": 825536,
                "target_id": 804377,
                "target_type": "Conversation",
                "hours": null,
                "time_tracking_at": "2013-12-27",
                "upload_ids": [],
                "assigned_id": null,
                "previous_assigned_id": null,
                "status": null,
                "previous_status": null,
                "due_on": null,
                "previous_due_on": null,
                "is_private": false,
                "previous_is_private": null,
                "urgent": false,
                "previous_urgent": false,
                "metadata": {},
                "uploads": [],
                "attachments": []
            }
            ],
            "id": 804377,
            "name": "27/12/13",
            "project_id": 825536,
            "user_id": 779107,
            "simple": false,
            "comments_count": 1,
            "is_private": false,
            "last_activity_id": 39190615,
            "metadata": {},
            "watcher_ids": [
                656388,
                779107
            ]
        }
        ];

        scope = nock("https://www.teambox.com").get("/api/2/conversations").reply(200, teamboxResponse);
        teambox = Teambox.createClient({bla: 1, username: "bla", password: "bla"});
        teambox.Conversations.all(function (err, data, json) {
            expect(data.length).to.equal(1);
            expect(data[0].id).to.equal(804377);
        });
    });

    it("#find", function () {
        var teambox, scope, teamboxResponse;
        teamboxResponse = {
            "type": "Conversation",
            "created_at": "2013-12-27 15:12:36 +0000",
            "updated_at": "2013-12-27 15:12:38 +0000",
            "hidden_comments_count": 0,
            "first_comment": {
                "type": "Comment",
                "created_at": "2013-12-27 15:12:37 +0000",
                "updated_at": "2013-12-27 15:12:37 +0000",
                "id": 26264289,
                "body": "",
                "body_html": "<p></p>",
                "user_id": 779107,
                "project_id": 825536,
                "target_id": 804377,
                "target_type": "Conversation",
                "hours": null,
                "time_tracking_at": "2013-12-27",
                "upload_ids": [],
                "assigned_id": null,
                "previous_assigned_id": null,
                "status": null,
                "previous_status": null,
                "due_on": null,
                "previous_due_on": null,
                "is_private": false,
                "previous_is_private": null,
                "urgent": false,
                "previous_urgent": false,
                "metadata": {},
                "uploads": [],
                "attachments": []
            },
            "recent_comments": [
                {
                "type": "Comment",
                "created_at": "2013-12-27 15:12:37 +0000",
                "updated_at": "2013-12-27 15:12:37 +0000",
                "id": 26264289,
                "body": "",
                "body_html": "<p></p>",
                "user_id": 779107,
                "project_id": 825536,
                "target_id": 804377,
                "target_type": "Conversation",
                "hours": null,
                "time_tracking_at": "2013-12-27",
                "upload_ids": [],
                "assigned_id": null,
                "previous_assigned_id": null,
                "status": null,
                "previous_status": null,
                "due_on": null,
                "previous_due_on": null,
                "is_private": false,
                "previous_is_private": null,
                "urgent": false,
                "previous_urgent": false,
                "metadata": {},
                "uploads": [],
                "attachments": []
            }
            ],
            "id": 804377,
            "name": "27/12/13",
            "project_id": 825536,
            "user_id": 779107,
            "simple": false,
            "comments_count": 1,
            "is_private": false,
            "last_activity_id": 39190615,
            "metadata": {},
            "watcher_ids": [
                656388,
                779107
            ]
        };
        scope = nock("https://www.teambox.com").get("/api/2/conversations/804377").reply(200, teamboxResponse);
        teambox = Teambox.createClient({bla: 1, username: "bla", password: "bla"});
        teambox.Conversations.find("804377", function (err, data) {
            expect(data.id).to.equal(804377);
        });
    });
});
