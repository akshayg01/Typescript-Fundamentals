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
//Any type
// we are receiving value from third party... 
var radomValue = 10;
radomValue = true;
radomValue = 'Akshay ';
console.log('any type', radomValue);
