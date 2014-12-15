/**
 * Created by LinkFly-user on 15.12.2014.
 */
(function(module) {
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
    };

    if (!require.isBrowser)
        define = require("C:/Program Files (x86)/nodejs/node_modules/amdefine/")(module);

    var uidFile = 'uid';
    if(!require.isBrowser) uidFile = "C:\\data-from-d\\my-js-libs\\uid\\uid.js";
    define([uidFile], function(uid) {
        uid.setUidProp("_$uid");
        var hashObjs = new HashObjects(uid);
        return hashObjs;
    });
})(!require.isBrowser && module)