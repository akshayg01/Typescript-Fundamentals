export {}
let msg = 'welcome back'
console.log(msg)

let isBeginner:boolean = true;
let total:number = 0;
let name:string = 'Krishna';
let sentence: string = `My name is ${name}  
 I am a beginner in Typescript... `
console.log('isbeginner ',isBeginner)
console.log('total ', total)
console.log( sentence);


// null and undefined types are not useful. 
let n:null = null;
let i:undefined = undefined;

//they are considered as subtype of number, string and bool

let isNew : boolean = null; //error type null is assiagned to boolean
console.log('isNew',isNew);

let myName:string = undefined ;
console.log('undefined asigned to string ', myName);


// Array declaration 
//two ways.. 
let list1 : number[] = [1, 2, 3];
let list2 :Array<number> = [1,2,3];


// array with multiple types. 
let list3: [string, number] = ['Ram', 1];

//Error
//let list4: [string, number] = ['Ram', 1, 546] ;

//error
//
//let list5 : [number] = [526,544,5]



//Enum to declare type of enum

enum color {'red', 'blue', 'green' };

let c:color = color.blue;
console.log('color', c);
// value start will the 0
// red = 0, blue = 1 and so on... 
//we want to start with specific value
enum color2 {'red' = 5, 'blue', 'green' };
let c2 : color2 = color2.green
console.log('enum withe specific value ', c2)
//in other words, it is collection of constants... 





//Any type
// we are receiving value from third party... 
let randomValue:any = 10;
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
let randomValue1:unknown = 10;
randomValue1 = true;
randomValue1 = 'Akshay'
console.log('unknown type', randomValue1);
console.log('intellisense is working after type assertion', (randomValue1 as string).toUpperCase());


randomValue = randomValue1 as boolean;
console.log('any type', randomValue);



