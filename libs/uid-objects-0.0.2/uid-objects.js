/**
 * Created by LinkFly-user on 13.12.2014.
 */
(function(module) {
    var startUID = 0;
    var uidProp;

    function genUID() {
        return startUID++;
    }

    function setUidProp(propName) {
        uidProp = propName;
    }

    function setStartUid(numStart) {
        startUID = numStart;
    }

    function getUid(obj) {
        if (typeof uidProp === "undefined")
            throw Error("Required call setUidProp before of using!");
        if (obj[uidProp] === undefined) {
            Object.defineProperty(obj, uidProp, {
                value: genUID(),
                enumerable: false,
                configurable: false
            });
        }
        return obj[uidProp];
    }

    var Uid = {
        getUid: getUid,
        setUidProp: setUidProp,
        setStartUid: setStartUid
    };

    if(module)
        module.exports = Uid;

    if (!require.isBrowser)
        //define = require("C:/Program Files (x86)/nodejs/node_modules/amdefine/")(module);
        define = require("amdefine")(module);

    define("uid-objects", [], function () {
        return Uid;
    });
})(!require.isBrowser && module);
