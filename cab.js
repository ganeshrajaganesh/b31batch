var student3 = {
    firstname: "mohamed",
    lastname:"musthafa",
    fullname: printfullname,
};
console.log(student3.fullname());
// console.log(printfullname.call(student3));   // musthafa,mohamed
// console.log(printfullname.apply(student));   //chandran,prabakaran
// console.log(printfullname.bind(student));

 
//----------------------------task-1--------------------------------------//
// call-->1. The call() method invokes a function with a given 'this' value and arguments provided one by one. 
    //    2.This means that we can call any function, and explicitly specify what 'this' should reference within the calling function  
// apply -->1.Invokes the function and allows you to pass in arguments as an array.
//bind--> 1.returns a new function, allowing you to pass in an array and any number of arguments.

//---------------call example------------------------//
 var person1 = {firstName: 'vijay', lastName: 'Kumar'};
 var person2 = {firstName: 'ruban', lastName: 'ganesh'};

 function say(greeting) {
   console.log(greeting + ' ' + this.firstName + ' ' + this.lastName);
 }

 say.call(person1, 'Hello'); // Hello vijay Kumar
 say.call(person2, 'Hello'); // Hello ruban ganesh
//----------------------apply example---------------------//
var person1 = {firstName: 'vijay', lastName: 'gokul'};
var person2 = {firstName: 'bharathy', lastName: 'ajith'};

function say(greeting) {
    console.log(greeting + ' ' + this.firstName + ' ' + this.lastName);
}

say.apply(person1, ['Hello']); // Hello vijay gokul
say.apply(person2, ['Hello']); // Hello bharathy ajith
//-------------------------bind example-----------------------//
var person1 = {firstName: 'vijay', lastName: 'varun'};
var person2 = {firstName: 'arun', lastName: 'prakash'};

function say() {
    console.log('Hello ' + this.firstName + ' ' + this.lastName);
}

var sayHelloJon = say.bind(person1);
var sayHelloKelly = say.bind(person2);

sayHelloJon(); // Hello vijay varun
sayHelloKelly(); // Hello arun prakash
//--------------------------------------task-2--------------------------------------------//
// prototype inheritense-->1.As opposed to Classical Inheritance, Prototypal Inheritance does not deal with increasing layers of abstraction. An Object is either an abstraction of a real-world thing, same as before, or is a direct copy of another Object. 
        //2.Objects can be created from thin air, or they can be created from other objects
 //--------------------------prototype example------------------------------------------//
 const bag ={};
 const watch= object.create(bag);
 const hithinksbag = object.create(watch);








