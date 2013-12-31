/*jslint node: true */
var nock, sinon, chai, expect, Teambox;
Teambox = require('../lib/teambox');
chai = require('chai');
chai.use(require('sinon-chai'));
expect = chai.expect;
sinon = require('sinon');
nock = require('nock');

describe('Teambox', function () {
    describe('Init', function () {
        it("should have a config property", function () {
            var teambox = Teambox.createClient({bla: 1, username: "bla", password: "bla"});
            expect(teambox.config.bla).to.equal(1);
        });

        it("should raise an error if not username/password are setted, using http auth", function () {
            expect(function () { Teambox.createClient({bla: 1}) }).to.throw(Error);
        });
    });
});
