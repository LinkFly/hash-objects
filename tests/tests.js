/**
 * Created by LinkFly-user on 14.12.2014.
 */
//var hashObject = require('C:/data-from-d/my-js-libs/hash-objects/hash-objects.js');
//console.log(hashObject);

///////////// Config ///////////
var hashObjectsLib = '../hash-objects';

    ///// Node.js config //////
if(!require.isBrowser) {
    var nodejs_modules_dir = "C:/Program Files (x86)/nodejs/node_modules/";
//C:/data-from-d/my-js-libs/uid/uid.js
    hashObjectsLib = '..\\hash-objects';
    hashObjectsLib = __dirname + "\\" + hashObjectsLib + '.js';

    var getModuleDir = function(module_name) {
        return nodejs_modules_dir + module_name + "/";
    };}
    //////////////////////////

//////// Compatibility
if (!require.isBrowser) {
    //var requirejs = require("C:/Program Files (x86)/nodejs/node_modules/requirejs/");
    //var reqjs = require("C:/Program Files (x86)/nodejs/node_modules/r/");
    var require = require(getModuleDir("amdrequire"));
    //console.log('hashObjectsLib: ' + hashObjectsLib);
    //C:\\data-from-d\\my-js-libs\\hash-objects\\
//    require('C:\\data-from-d\\my-js-libs\\hash-objects\\hash-objects.js');
    require(hashObjectsLib);
//    console.log(hashObjectsLib);

}
////////////////// Config ///////////////////
require.config({
    paths: {
        uid: '../../uid/uid'
    }
});
///////////////////////////////////////////////

require([hashObjectsLib], function(hashObjects) {
    test("Test hash-objects", function (assert) {
        var obj = {name: 'myname'};
        hashObjects.add(obj, "myvalue");
        assert.ok(hashObjects.getVal(obj) === "myvalue",
            "Check saved value into objects hash");
        assert.ok(hashObjects.getObjsHash()[hashObjects.getObjId(obj)].name === "myname",
            "Check getting object by id"
        );
    });

    test("Test finding objects into array (for comparable)", function(assert) {
        assert.ok((function() {
            var objs = [];
            var i;
            var steps = 10000;
            for(i = 0; i < steps; i++)
                objs.push({});
            var objsVals = [];
            for(i = 0; i < objs.length; i++)
                objsVals.push(i);
            function getObjVal(obj) {
                for(i = 0; i < objs.length; i++) {
                    if (objs[i] == obj)
                        return objsVals[i];
                }
            }
            var res = 0;
            for(i = 0; i < objs.length; i++)
                res += getObjVal(objs[i]);
            return res;
        })() === 49995000, "Check time simple finding objects into array")
    });

    test("Test finding objects into hashObjects", function(assert) {
        assert.ok((function() {
            var objs = [];
            var i;
            var steps = 10000;
            //var steps = 10;
            for(i = 0; i < steps; i++)
                objs.push({});
            hashObjects.clear();
            for(i = 0; i < objs.length; i++)
                hashObjects.add(objs[i], i);
            var res = 0;
            for(i = 0; i < objs.length; i++)
                res += hashObjects.getVal(objs[i]);
            return res;
        })() === 49995000, "Check time finding objects into hashObjects (~4 faster then finding into array)")
    });

});

