Библиотека HASH-OBJECTS (JavaScript/Node.js).
Реализует хэш-массив в котором ключами могут быть произвольные объекты.
Использует библиотеку uid.js

Использование.

var obj = {name: 'myname'};
hashObjects.add(obj, "myvalue");
hashObjects.getVal(obj); // > "myvalue"
hashObjects.getObjsHash()[hashObjects.getObjId(obj)].name; // > "myname"

(подробнее см. tests/tests.js)