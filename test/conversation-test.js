/*jslint node: true */
var nock, sinon, chai, expect, Teambox;
Teambox = require('../lib/teambox');
chai = require('chai');
chai.use(require('sinon-chai'));
expect = chai.expect;
sinon = require('sinon');
nock = require('nock');

describe('Conversations', function () {
    it(".createComment", function () {
        var teambox, scope, teamboxResponse, conversation, payload;

        teamboxResponse = {
            "type": "Comment",
            "created_at": "2014-01-02 15:32:42 +0000",
            "updated_at": "2014-01-02 15:32:42 +0000",
            "id": 26437442,
            "body": "test comment",
            "body_html": "<p>test comment</p>",
            "user_id": 779107,
            "project_id": 825536,
            "target_id": 808796,
            "target_type": "Conversation",
            "hours": null,
            "time_tracking_at": "2014-01-02",
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
        };

        payload = {
            body: "test comment"
        };

        scope = nock("https://www.teambox.com").post("/api/2/conversations/808796/comments", payload).reply(200, teamboxResponse);
        teambox = Teambox.createClient({bla: 1, username: "bla", password: "bla"});

        conversation = new teambox.Conversation({
            id: 808796,
            client: teambox
        });

        conversation.createComment(payload, function (err, instance, json) {
            expect(instance.id).to.equal(26437442);
            expect(instance.data.body).to.equal(payload.body);
        });
    });
});
