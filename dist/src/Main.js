"use strict";
var Foo_1 = require('./Foo');
/**
 * メインクラス
 */
var Main = (function () {
    function Main() {
    }
    Main.main = function () {
        console.log('Hello Word!');
        var foo = new Foo_1.default('muraken720');
        var msg = foo.say();
        console.log(msg);
    };
    return Main;
}());
Main.main();
//# sourceMappingURL=Main.js.map