console.log('Hello from TypeScript');

let myString = "This is a string";

let myNumber: number = 456;

let myNumArray: number[] = [1,2,3];

let myBoolean: boolean = true;

myBoolean = myNumber === 456;

enum StatoOrdine {
	InAttesa,
    InLavorazione,
    Completato,
    Annullato
}

let ordstatus: StatoOrdine = StatoOrdine.Annullato;


// Duck typing

let obj1 = {
    name: "Mario",
    id: 1,
    print: function () {},
}

let obj2 = {
    id: 2,
    name: "Mario2",
    print: function() {}
}

let obj3 = {
    id: 3,
    name: "Giovanni",
    print: function() {},
    select: function() {}
}

obj2 = obj1;

interface IUser {
    name: string
    surname: string
    age: number
}

let user = {
    name: "Mario",
    surname: "Rossi",
    age: 30,
    birthdate: "20/12/87"
}

function sayHello(user: IUser){
    console.log(`Hello ${user.name}!`);
}

sayHello(user);

interface IDictionary {
    [index: string]: string
}

let myDict: IDictionary = {}

myDict["key1"] = "hello";
myDict.key2 = "ciao";
myDict[myString] = "ciao"

interface IUserWithRole {
    role: string
}

type Interface1 = {
    id: string
    name: string
}

const keys: "id" | "name" = "name"

type Interface1Keys = "id" | "name"
type Interface1Props = keyof Interface1

const keyofKeys: Interface1Props = "id"

function getProps(key: Interface1Props, value: Interface1) {
    console.log(`${key} = ${value[key]}`);
}

interface Interface2 {
    description: string
    value: string
}

function printNameOrValue(obj: Interface1 | Interface2, callback: () => void) {
    if('id' in obj) {
        console.log(obj.name)
        callback();
    }
    if('description' in obj) {
        console.log(obj.value)
    }
}

const myCallback = () => {
    console.log('my callback')
}

printNameOrValue({
    id: "3",
    name: "Giacomo"
}, myCallback) // Giacomo


const myArr = [1,2,3,4];

const increment = (i: number) => i + 1;
myArr.forEach(increment);

const value = myArr || "ciao";

