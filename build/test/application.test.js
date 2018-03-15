"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert = require("assert");
const axios_1 = require("axios");
const moxios = require("moxios");
const sinon = require("sinon");
const Root = require("../src");
const helper = require("./helper");
const APP_ID = 'app_id';
const APP_TOKEN = 'app_secret';
describe('Root.InsuranceAPI - Application', () => {
    let client;
    before(() => {
        client = new Root.InsuranceAPI(APP_ID, APP_TOKEN);
    });
    beforeEach(() => {
        moxios.install(axios_1.default);
    });
    afterEach(() => {
        moxios.uninstall(axios_1.default);
    });
    it('#createApplication()', (done) => {
        moxios.withMock(() => {
            const onFulfilled = sinon.spy();
            const stubData = {};
            client.createApplication('bf1ada91-eecb-4f47-9bfa-1258bb1e0055', 'f4397823-db4a-4d6a-a06b-08e1a2a3172c', 50000, '1234567890').then((result) => {
                assert.deepEqual(stubData, result);
            }).then(onFulfilled);
            moxios.wait(helper.mock.bind(this, onFulfilled, stubData, done));
        });
    });
});
