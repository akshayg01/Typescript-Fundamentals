"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var msg = 'welcome back';
console.log(msg);
var isBeginner = true;
var total = 0;
var name = 'Krishna';
var sentence = "My name is ".concat(name, "  \n I am a beginner in Typescript... ");
console.log('isbeginner ', isBeginner);
console.log('total ', total);
console.log(sentence);
// null and undefined types are not useful. 
var n = null;
var i = undefined;
//they are considered as subtype of number, string and bool
//let isNew : boolean = null; //error type null is assiagned to boolean
//console.log('isNew',isNew);
//let myName:string = undefined ;
//console.log('undefined asigned to string ', myName);
// Array declaration 
//two ways.. 
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
// array with multiple types. 
var list3 = ['Ram', 1];
//Error
//let list4: [string, number] = ['Ram', 1, 546] ;
//error
//
//let list5 : [number] = [526,544,5]
//Enum to declare type of enum
var color;
(function (color) {
    color[color["red"] = 0] = "red";
    color[color["blue"] = 1] = "blue";
    color[color["green"] = 2] = "green";
})(color || (color = {}));
;
var c = color.blue;
console.log('color', c);
// value start will the 0
// red = 0, blue = 1 and so on... 
//we want to start with specific value
var color2;
(function (color2) {
    color2[color2["red"] = 5] = "red";
    color2[color2["blue"] = 6] = "blue";
    color2[color2["green"] = 7] = "green";
})(color2 || (color2 = {}));
;
var c2 = color2.green;
console.log('enum withe specific value ', c2);
//in other words, it is collection of constants... 
//Any type
// we are receiving value from third party... 
var randomValue = 10;
randomValue = true;
//randomValue = 'Akshay '
console.log('any type', randomValue);
//if you are over using any means you are not taking advantage of Typescript 
// intellisense will not work... 
// new feature new type as unknow. 
// not very clear need to read more about it...  
//unknown is the type-safe counterpart of any.
/*Anything is assignable to unknown,
 but unknown isn’t assignable to anything but itself and any without a type assertion or a control flow based narrowing.
*/
var randomValue1 = 10;
randomValue1 = true;
randomValue1 = 'Akshay';
console.log('unknown type', randomValue1);
console.log('intellisense is working after type assertion', randomValue1.toUpperCase());
randomValue = randomValue1;
console.log('any type', randomValue);
// Type interference ..... 
// it works only for variables which are asigned at the time of declaration.. 
var abc;
abc = 10;
abc = true;
var b = 20;
// error boolean is not assignable to number.. 
//b= true;
// intellisense also work... 
b.toFixed();
// union of types of same variables. 
var multiType;
multiType = true;
multiType = 100;
// why not just use any... 
/// it has some restriction... 
// intellisense support... 
//multiType. it shows function of number type...
/// functions....
function add(num1, num2) {
    return num1 + num2;
}
function add1(num1, num2) {
    return num1 + num2;
}
console.log('function', add1(15, 566));
//Default and optional parameters... 
// in typescript all parameters are required... 
function add2(num1, num2) {
    if (num2) {
        return num1 + num2;
    }
    return num1;
}
console.log('function with optional parameter', add2(566));
// Function with default value... 
// another way of optional parameter... 
function add3(num1, num2) {
    if (num2 === void 0) { num2 = 0; }
    if (num2) {
        return num1 + num2;
    }
    return num1;
}
console.log('function with parameter Default value', add3(566));
//interface to declare type 
// so we can use it instead of define all object properties 
// example we have address object which has 10 properties... 
// we have few function which take address object then we have to specify object properties
// better use interface..
function fullName(person) {
    return person.firstName + ' ' + person.lastName;
}
var p = {
    firstName: 'Hare',
    lastName: 'Krishna'
};
console.log('Need to interface', fullName(p));
function fullNameWithInterface(person) {
    return person.firstName + ' ' + person.lastName;
}
console.log('use of interface', fullNameWithInterface(p));
//Class
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employeeName = name;
    }
    Employee.prototype.greet = function () {
        console.log('Good Morning', this.employeeName);
    };
    return Employee;
}());
var emp1 = new Employee('Krishna...');
emp1.greet();
//inheritance..... 
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(name) {
        return _super.call(this, name) || this;
    }
    Manager.prototype.delegateWork = function () {
        console.log('I am delegating work...');
    };
    return Manager;
}(Employee));
var m = new Manager('Radha Rani');
m.delegateWork();
//Access modifier... 
// public....
//default is 
//private 
// if private we can't access in derived class...
// protected 
// it can used in class and derived class only..
