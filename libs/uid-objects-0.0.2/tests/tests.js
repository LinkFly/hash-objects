/**
 * Created by LinkFly-user on 14.12.2014.
 */
///////////// Config ///////////
var uidModule = 'uid-objects',
    uidFile = '../' + uidModule;

//////// Compatibility   /////
if(!require.isBrowser) {
    var require = require("amdrequire");
    require(__dirname + '\\' + '..\\' + uidModule + '.js');
} else {
    var paths = {};
    paths[uidModule] = uidFile;
    require.config({
        paths: paths
    })
    uidFile = uidModule;
}
///////////////////////////////

require([uidFile], function(uid) {

    test("Test uid", function (assert) {
        uid.setUidProp("_$uid");
        uid.setStartUid(101);
        var obj = {};
        var someObj = getSomeObj();

        assert.ok(101 == uid.getUid(obj), "PASSED Check setting unique identifier for new object");
        assert.ok(102 == uid.getUid(someObj), "PASSED Check setting unique identifier for existing object");
        assert.ok(101 == uid.getUid(obj), "PASSED Check return the same unique identifier for new object");
        assert.ok(102 == uid.getUid(someObj), "PASSED Check return the same unique identifier for existing object");

        function getSomeObj() {
            if (typeof window !== "undefined")
                return window;
            else if (typeof global !== "undefined")
                return global;
            else throw Error("Not found window(browsers) or global(nodejs)!");
        }
    });
});

