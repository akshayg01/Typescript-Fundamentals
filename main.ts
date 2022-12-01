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


//Any type
// we are receiving value from third party... 
let radomValue:any = 10;
radomValue = true;
radomValue = 'Akshay '
console.log('any type', radomValue);


