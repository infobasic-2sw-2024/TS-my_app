console.log('Hello from TypeScript');

// type declaration
let myNumber: number = 456;
let myBoolean: boolean = true;

myBoolean = myNumber === 456;

// array declaration
let myNumArray: number[] = [1, 2, 3];

// il tipo è definito implicitamente (type inference)
let myString = "This is a string";


// enum
enum StatoOrdine {
    InAttesa,
    InLavorazione,
    Completato,
    Annullato
}

// assegnamento di un valore di tipo enum
let ordstatus: StatoOrdine = StatoOrdine.Annullato;


// Duck typing
let obj1 = {
    name: "Mario",
    id: 1,
    print: function () { },
}

let obj2 = {
    id: 2,
    name: "Mario2",
    print: function () { }
}

let obj3 = {
    id: 3,
    name: "Giovanni",
    print: function () { },
    select: function () { }
}

obj2 = obj1;

// obj1 = obj2; // errore

// interface
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

// la funzione sayHello accetta un parametro di tipo IUser che deve avere le proprietà name, surname e age
// se l'oggetto passato come argomento ha altre proprietà (in più), non ci sono problemi
function sayHello(user: IUser) {
    console.log(`Hello ${user.name}!`);
}

sayHello(user);


// interface di un dizionario
interface IDictionary {
    [index: string]: string
}

let myDict: IDictionary = {}

myDict["key1"] = "hello";
myDict.key2 = "ciao";
myDict[myString] = "ciao"

// estendere un interfaccia
interface IUserWithRole extends IUser {
    role: string
}

interface Interface1 {
    id: string
    name: string
}

interface Interface2 {
    description: string
    value: string
}

// operatore "in" come type guard per discriminare tra due interfacce
// e definire il tipo di una callback (eg. () => void))
function printNameOrValue(obj: Interface1 | Interface2, callback: () => void) {
    if ('id' in obj) {
        console.log(obj.name)
        callback();
    }
    if ('description' in obj) {
        console.log(obj.value)
    }
}

// keyof and type alias
const keys: "id" | "name" = "name"

type Interface1Keys = "id" | "name"
type Interface1Props = keyof Interface1

const thisMustBeAnInterface1Key: Interface1Props = "id"

function getProps(key: Interface1Props, value: Interface1) {
    console.log(`${key} = ${value[key]}`);
}

const myCallback = () => {
    console.log('my callback')
}

printNameOrValue({
    id: "3",
    name: "Giacomo"
}, myCallback) // Giacomo


// javascript callback
const myArr = [1, 2, 3, 4];

const increment = (i: number) => i + 1;
myArr.forEach(increment);

const value = myArr || "ciao";

