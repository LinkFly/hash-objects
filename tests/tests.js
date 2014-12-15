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
});

