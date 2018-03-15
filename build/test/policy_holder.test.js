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
describe('Root.InsuranceAPI - PolicyHolder', () => {
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
    it('#createPolicyHolder()', (done) => {
        moxios.withMock(() => {
            const onFulfilled = sinon.spy();
            const stubData = {};
            client.createPolicyHolder({ type: 'id', number: '6801015800084', country: 'ZA' }, 'Erlich', 'Bachman', 'erlich@root.co.za').then((result) => {
                assert.deepEqual(stubData, result);
            }).then(onFulfilled);
            moxios.wait(helper.mock.bind(this, onFulfilled, stubData, done));
        });
    });
    it('#listPolicyHolders()', (done) => {
        moxios.withMock(() => {
            const onFulfilled = sinon.spy();
            const stubData = {};
            client.listPolicyHolders().then((result) => {
                assert.deepEqual(stubData, result);
            }).then(onFulfilled);
            moxios.wait(helper.mock.bind(this, onFulfilled, stubData, done));
        });
    });
    it('#getPolicyHolder()', (done) => {
        moxios.withMock(() => {
            const onFulfilled = sinon.spy();
            const stubData = {};
            client.listPolicyHolders('128ba0c0-3f6a-4f8b-9b40-e2066b02b59e').then((result) => {
                assert.deepEqual(stubData, result);
            }).then(onFulfilled);
            moxios.wait(helper.mock.bind(this, onFulfilled, stubData, done));
        });
    });
    it('#updatePolicyHolder()', (done) => {
        moxios.withMock(() => {
            const onFulfilled = sinon.spy();
            const stubData = {};
            client.updatePolicyHolder('128ba0c0-3f6a-4f8b-9b40-e2066b02b59e', 'erlich@piedpiper.com', '+27741011337').then((result) => {
                assert.deepEqual(stubData, result);
            }).then(onFulfilled);
            moxios.wait(helper.mock.bind(this, onFulfilled, stubData, done));
        });
    });
    it('#listPolicyHolderEvents()', (done) => {
        moxios.withMock(() => {
            const onFulfilled = sinon.spy();
            const stubData = {};
            client.listPolicyHolderEvents('128ba0c0-3f6a-4f8b-9b40-e2066b02b59e').then((result) => {
                assert.deepEqual(stubData, result);
            }).then(onFulfilled);
            moxios.wait(helper.mock.bind(this, onFulfilled, stubData, done));
        });
    });
});
