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
        var teambox, scope, teamboxResponse, task;
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

    it(".updateAttributes", function () {
        var teambox, scope, teamboxResponse, task;
        teambox = Teambox.createClient({bla: 1, username: "bla", password: "bla"});

        teamboxResponse = {
            "type": "Task",
            "created_at": "2013-12-31 16:21:19 +0000",
            "updated_at": "2013-12-31 16:28:04 +0000",
            "hidden_comments_count": 0,
            "first_comment": {
                "type": "Comment",
                "created_at": "2013-12-31 16:21:19 +0000",
                "updated_at": "2013-12-31 16:21:19 +0000",
                "id": 26380863,
                "body": "",
                "body_html": "",
                "user_id": 656387,
                "project_id": 825536,
                "target_id": 8951275,
                "target_type": "Task",
                "hours": null,
                "time_tracking_at": "2013-12-31",
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
                "created_at": "2013-12-31 16:21:19 +0000",
                "updated_at": "2013-12-31 16:21:19 +0000",
                "id": 26380863,
                "body": "",
                "body_html": "",
                "user_id": 656387,
                "project_id": 825536,
                "target_id": 8951275,
                "target_type": "Task",
                "hours": null,
                "time_tracking_at": "2013-12-31",
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
            "id": 8951275,
            "name": "Updated Task",
            "task_list_id": 1669313,
            "comments_count": 1,
            "assigned_id": null,
            "status": 0,
            "is_private": false,
            "project_id": 825536,
            "urgent": false,
            "user_id": 656387,
            "position": 0,
            "last_activity_id": 39336577,
            "record_conversion_type": null,
            "record_conversion_id": null,
            "metadata": {},
            "watcher_ids": [
                656387
            ],
            "deleted": false,
            "due_on": null
        };

        task = new teambox.Task({
            id: 8951275,
            data: {name: "Task"},
            client: teambox
        });

        scope = nock("https://www.teambox.com").put("/api/2/tasks/8951275").reply(200, teamboxResponse);

        expect(task.data.name).to.equal("Task");

        task.updateAttributes({name: "Updated Task"}, function (err, updatedTask) {
            expect(updatedTask.data.name).to.equal("Updated Task");
        });
    });

    it(".update", function () {
        var teambox, scope, teamboxResponse, task;
        teambox = Teambox.createClient({bla: 1, username: "bla", password: "bla"});

        teamboxResponse = {
            "type": "Task",
            "created_at": "2013-12-31 16:21:19 +0000",
            "updated_at": "2013-12-31 16:28:04 +0000",
            "hidden_comments_count": 0,
            "first_comment": {
                "type": "Comment",
                "created_at": "2013-12-31 16:21:19 +0000",
                "updated_at": "2013-12-31 16:21:19 +0000",
                "id": 26380863,
                "body": "",
                "body_html": "",
                "user_id": 656387,
                "project_id": 825536,
                "target_id": 8951275,
                "target_type": "Task",
                "hours": null,
                "time_tracking_at": "2013-12-31",
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
                "created_at": "2013-12-31 16:21:19 +0000",
                "updated_at": "2013-12-31 16:21:19 +0000",
                "id": 26380863,
                "body": "",
                "body_html": "",
                "user_id": 656387,
                "project_id": 825536,
                "target_id": 8951275,
                "target_type": "Task",
                "hours": null,
                "time_tracking_at": "2013-12-31",
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
            "id": 8951275,
            "name": "Updated Task",
            "task_list_id": 1669313,
            "comments_count": 1,
            "assigned_id": null,
            "status": 0,
            "is_private": false,
            "project_id": 825536,
            "urgent": false,
            "user_id": 656380,
            "position": 0,
            "last_activity_id": 39336577,
            "record_conversion_type": null,
            "record_conversion_id": null,
            "metadata": {},
            "watcher_ids": [
                656387
            ],
            "deleted": false,
            "due_on": null
        };

        task = new teambox.Task({
            id: 8951275,
            data: {name: "Task", user_id: 656387},
            client: teambox
        });

        scope = nock("https://www.teambox.com").put("/api/2/tasks/8951275").reply(200, teamboxResponse);

        expect(task.data.name).to.equal("Task");
        expect(task.data.user_id).to.equal(656387);

        task.data.name = "Updated Task";
        task.data.user_id = 656380;

        task.update(function (err, updatedTask) {
            expect(updatedTask.data.name).to.equal("Updated Task");
            expect(updatedTask.data.user_id).to.equal(656380);
        });
    });
});
