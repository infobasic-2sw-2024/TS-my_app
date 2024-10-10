console.log('Hello from TypeScript');
var myString = "This is a string";
var myNumber = 456;
var myNumArray = [1, 2, 3];
var myBoolean = true;
myBoolean = myNumber === 456;
var StatoOrdine;
(function (StatoOrdine) {
    StatoOrdine[StatoOrdine["InAttesa"] = 0] = "InAttesa";
    StatoOrdine[StatoOrdine["InLavorazione"] = 1] = "InLavorazione";
    StatoOrdine[StatoOrdine["Completato"] = 2] = "Completato";
    StatoOrdine[StatoOrdine["Annullato"] = 3] = "Annullato";
})(StatoOrdine || (StatoOrdine = {}));
var ordstatus = StatoOrdine.Annullato;
// Duck typing
var obj1 = {
    name: "Mario",
    id: 1,
    print: function () { },
};
var obj2 = {
    id: 2,
    name: "Mario2",
    print: function () { }
};
var obj3 = {
    id: 3,
    name: "Giovanni",
    print: function () { },
    select: function () { }
};
obj2 = obj1;
var user = {
    name: "Mario",
    surname: "Rossi",
    age: 30,
    birthdate: "20/12/87"
};
function sayHello(user) {
    console.log("Hello ".concat(user.name, "!"));
}
sayHello(user);
var myDict = {};
myDict["key1"] = "hello";
myDict.key2 = "ciao";
myDict[myString] = "ciao";
var keys = "name";
var keyofKeys = "id";
function getProps(key, value) {
    console.log("".concat(key, " = ").concat(value[key]));
}
function printNameOrValue(obj, callback) {
    if ('id' in obj) {
        console.log(obj.name);
        callback();
    }
    if ('description' in obj) {
        console.log(obj.value);
    }
}
printNameOrValue({
    id: "3",
    name: "Giacomo"
}, function () {
    console.log('my callback');
}); // Giacomo
