"use strict";
var assert = require('power-assert');
var Foo_1 = require('../src/Foo');
describe('Test1', function () {
    it('true is true', function () {
        var foo = new Foo_1.default("ken");
        assert.equal(foo.say(), 'Hello!');
    });
});
describe('Test2', function () {
    it('true is false', function () {
        var HOGE = 'hoge';
        assert.equal('Now', HOGE);
    });
});
//# sourceMappingURL=Foo.spec.js.map