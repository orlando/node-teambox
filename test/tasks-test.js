/*jslint node: true */
var nock, sinon, chai, expect, Teambox;
Teambox = require('../lib/teambox');
chai = require('chai');
chai.use(require('sinon-chai'));
expect = chai.expect;
sinon = require('sinon');
nock = require('nock');

describe('Tasks', function () {
    it("#all", function () {
        var teambox, scope, teamboxResponse;
        teamboxResponse = [
            {
            "type": "Task",
            "created_at": "2013-12-28 19:12:04 +0000",
            "updated_at": "2013-12-28 19:12:05 +0000",
            "hidden_comments_count": 0,
            "first_comment": {
                "type": "Comment",
                "created_at": "2013-12-28 19:12:04 +0000",
                "updated_at": "2013-12-28 19:12:04 +0000",
                "id": 26294048,
                "body": "",
                "body_html": "",
                "user_id": 656387,
                "project_id": 825536,
                "target_id": 8917310,
                "target_type": "Task",
                "hours": null,
                "time_tracking_at": "2013-12-28",
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
                "created_at": "2013-12-28 19:12:04 +0000",
                "updated_at": "2013-12-28 19:12:04 +0000",
                "id": 26294048,
                "body": "",
                "body_html": "",
                "user_id": 656387,
                "project_id": 825536,
                "target_id": 8917310,
                "target_type": "Task",
                "hours": null,
                "time_tracking_at": "2013-12-28",
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
            "id": 8917310,
            "name": "Test",
            "task_list_id": 1669313,
            "comments_count": 1,
            "assigned_id": null,
            "status": 0,
            "is_private": false,
            "project_id": 825536,
            "urgent": false,
            "user_id": 656387,
            "position": 0,
            "last_activity_id": 39228079,
            "record_conversion_type": null,
            "record_conversion_id": null,
            "metadata": {},
            "watcher_ids": [
                656387
            ],
            "deleted": false,
            "due_on": null
        }
        ];

        scope = nock("https://www.teambox.com").get("/api/2/tasks").reply(200, teamboxResponse);
        teambox = Teambox.createClient({bla: 1, username: "bla", password: "bla"});
        teambox.Tasks.all(function (err, data, json) {
            expect(data.length).to.equal(1);
            expect(data[0].id).to.equal(8917310);
        });
    });

    it("#find", function () {
        var teambox, scope, teamboxResponse;
        teamboxResponse = {
            "type": "Task",
            "created_at": "2013-12-28 19:12:04 +0000",
            "updated_at": "2013-12-28 19:12:05 +0000",
            "hidden_comments_count": 0,
            "first_comment": {
                "type": "Comment",
                "created_at": "2013-12-28 19:12:04 +0000",
                "updated_at": "2013-12-28 19:12:04 +0000",
                "id": 26294048,
                "body": "",
                "body_html": "",
                "user_id": 656387,
                "project_id": 825536,
                "target_id": 8917310,
                "target_type": "Task",
                "hours": null,
                "time_tracking_at": "2013-12-28",
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
                "created_at": "2013-12-28 19:12:04 +0000",
                "updated_at": "2013-12-28 19:12:04 +0000",
                "id": 26294048,
                "body": "",
                "body_html": "",
                "user_id": 656387,
                "project_id": 825536,
                "target_id": 8917310,
                "target_type": "Task",
                "hours": null,
                "time_tracking_at": "2013-12-28",
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
            "id": 8917310,
            "name": "Test",
            "task_list_id": 1669313,
            "comments_count": 1,
            "assigned_id": null,
            "status": 0,
            "is_private": false,
            "project_id": 825536,
            "urgent": false,
            "user_id": 656387,
            "position": 0,
            "last_activity_id": 39228079,
            "record_conversion_type": null,
            "record_conversion_id": null,
            "metadata": {},
            "watcher_ids": [
                656387
            ],
            "deleted": false,
            "due_on": null
        };

        scope = nock("https://www.teambox.com").get("/api/2/tasks/8917310").reply(200, teamboxResponse);
        teambox = Teambox.createClient({bla: 1, username: "bla", password: "bla"});
        teambox.Tasks.find("8917310", function (err, data) {
            expect(data.id).to.equal(8917310);
        });
    });

    it("#where", function () {
        var teambox, scope, teamboxResponse;
        teamboxResponse = [
            {
                "type": "Task",
                "created_at": "2013-12-28 19:12:04 +0000",
                "updated_at": "2013-12-28 19:12:05 +0000",
                "hidden_comments_count": 0,
                "first_comment": {
                    "type": "Comment",
                    "created_at": "2013-12-28 19:12:04 +0000",
                    "updated_at": "2013-12-28 19:12:04 +0000",
                    "id": 26294048,
                    "body": "",
                    "body_html": "",
                    "user_id": 656387,
                    "project_id": 825536,
                    "target_id": 8917310,
                    "target_type": "Task",
                    "hours": null,
                    "time_tracking_at": "2013-12-28",
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
                    "created_at": "2013-12-28 19:12:04 +0000",
                    "updated_at": "2013-12-28 19:12:04 +0000",
                    "id": 26294048,
                    "body": "",
                    "body_html": "",
                    "user_id": 656387,
                    "project_id": 825536,
                    "target_id": 8917310,
                    "target_type": "Task",
                    "hours": null,
                    "time_tracking_at": "2013-12-28",
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
                "id": 8917310,
                "name": "Test",
                "task_list_id": 1669313,
                "comments_count": 1,
                "assigned_id": null,
                "status": 0,
                "is_private": false,
                "project_id": 825536,
                "urgent": false,
                "user_id": 656387,
                "position": 0,
                "last_activity_id": 39228079,
                "record_conversion_type": null,
                "record_conversion_id": null,
                "metadata": {},
                "watcher_ids": [
                    656387
                ],
                "deleted": false,
                "due_on": null
            }
        ];

        scope = nock("https://www.teambox.com").get("/api/2/tasks?project_id=825536").reply(200, teamboxResponse);
        teambox = Teambox.createClient({bla: 1, username: "bla", password: "bla"});
        teambox.Tasks.where({project_id: "825536"}, function (err, data) {
            expect(data.length).to.equal(1);
            expect(data[0].id).to.equal(8917310);
            expect(data[0].data.project_id).to.equal(825536);
        });
    });
});
