# node-teambox

A node.js wrapper for the [Teambox](http://www.teambox.com) API.

# Installation

`npm install node-teambox`

# Usage

```
var Teambox, client;
Teambox = require('teambox');
client = Teambox.createClient({
  username: "foo",
  password: "bar"
});

client.Projects.all(function (err, projects) {
    //
    // List all projects for this Teambox account.
    //
});
```
# Implemented endpoints

## Activities

| Resource | Description |
|:---------|:------------|
|GET /api/2/activities |List activities|

## Attachments

| Resource | Description |
|:---------|:------------|
|GET /api/2/activities |List attachments|

## Projects

| Resource | Description |
|:---------|:------------|
|GET /api/2/projects |List projects|
|GET /api/2/projects/:id |Project detail|
|GET /api/2/projects/:id/tasks |Project's tasks list|
|GET /api/2/projects/:id/activities |Project's activities list|
|GET /api/2/projects/:id/conversations |Project's conversations list|
|GET /api/2/projects/:id/attachments |Project's attachments list|
|POST /api/2/projects |Create a new project|
|PUT /api/2/projects/:id |Updates a project|
|DELETE /api/2/projects/:id |Deletes a project|
|GET /api/2/projects/:id/metadata |Return all the metadata|

## Tasks

| Resource | Description |
|:---------|:------------|
|GET /api/2/tasks |List tasks|
|GET /api/2/tasks/:id |Task detail|
|POST /api/2/tasks |Create a new task|
|PUT /api/2/tasks/:id |Updates a task|
|DELETE /api/2/tasks/:id |Deletes a tasks|
|GET /api/2/tasks/:id/metadata |Return all the metadata|

## Conversations

| Resource | Description |
|:---------|:------------|
|GET /api/2/conversations |List conversations|
|GET /api/2/conversations/:id |Conversation detail|
|POST /api/2/conversations |Create a new conversation|
|PUT /api/2/conversations/:id |Updates a conversation|
|DELETE /api/2/conversations/:id |Deletes a conversation|

# Development

This library uses grunt for development. You can run tests with `grunt test`

# Contributing

1. Create an issue/ Pick and issue.
2. Fork the repo.
3. Create a branch.
4. Fix the issue.
5. Create a pull request.
