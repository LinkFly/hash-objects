/**
 * Created by LinkFly-user on 15.12.2014.
 */
(function(module) {
    ///////// Config /////////
    var uidObjectsModule = "uid-objects",
        uidObjectsFile = "./libs/uid-objects-0.0.2/" + uidObjectsModule;
    ///////////////////////////

    ////////////////// Compatibility ///////////////////
    if(require.isBrowser) {
        var paths = {};
        paths['uid-objects'] = '../' + uidObjectsFile;
        require.config({paths: paths});
        uidObjectsFile = uidObjectsModule;
    } else define = require("amdefine")(module);
///////////////////////////////////////////////

    var HashObjects = function (uid) {
        this.hashObjs = {};
        this.objsIdx = {};
        this.add = function (obj, val) {
            var id = uid.getUid(obj);
            this.hashObjs[id] = val;
            this.objsIdx[id] = obj;
            return this.hashObjs;
        }
        this.getObjsHash = function () {
            return this.objsIdx
        };
        this.getHash = function () {
            return this.hashObjs
        };
        this.getObjId = function (obj) {
            return uid.getUid(obj);
        };
        this.getVal = function (obj) {
            return this.getHash()[this.getObjId(obj)]
        };
        this.clear = function(){
            this.hashObjs = {};
            this.objsIdx = {};
        };
    };

    define([uidObjectsModule], function(uid) {
        uid.setUidProp("_$uid");
        var hashObjs = new HashObjects(uid);
        return hashObjs;
    });
})(!require.isBrowser && module)
