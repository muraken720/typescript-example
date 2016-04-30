"use strict";
var Foo = (function () {
    function Foo(name) {
        this.name = name;
    }
    Foo.prototype.say = function () {
        var foo = "Foo";
        return 'Hello ' + this.name + ' Foo!!!';
    };
    return Foo;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Foo;
//# sourceMappingURL=Foo.js.map