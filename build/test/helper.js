"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert = require("assert");
const moxios = require("moxios");
function mock(fulfillment, data, cb) {
    const request = moxios.requests.mostRecent();
    request.respondWith({
        status: 200,
        response: data,
    }).then(() => {
        assert.equal(fulfillment.called, true);
        cb();
    });
}
exports.mock = mock;
