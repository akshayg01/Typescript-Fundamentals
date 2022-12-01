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

 // Type interference ..... 
// it works only for variables which are asigned at the time of declaration.. 
 let abc ;
 abc=10;
 abc = true;


 let b = 20;
  // error boolean is not assignable to number.. 
  //b= true;
// intellisense also work... 
 b.toFixed();


 // union of types of same variables. 
 let multiType: number | boolean 
 multiType = true;
 multiType = 100;

 // why not just use any... 
 /// it has some restriction... 
 // intellisense support... 
 //multiType. it shows function of number type...


 /// functions....
function add(num1, num2)
{
    return num1+ num2
}

function add1(num1:number, num2:number):number
{
    return num1+ num2
}

console.log('function', add1(15,566))

//Default and optional parameters... 
// in typescript all parameters are required... 

function add2(num1:number, num2?:number):number
{
    if(num2)
    {
    return num1+ num2
    }
    return num1;
}

console.log('function with optional parameter', add2(566))










