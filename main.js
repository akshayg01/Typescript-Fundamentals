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
