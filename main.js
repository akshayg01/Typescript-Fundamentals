"use strict";
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
var isNew = null; //error type null is assiagned to boolean
console.log('isNew', isNew);
var myName = undefined;
console.log('undefined asigned to string ', myName);
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
