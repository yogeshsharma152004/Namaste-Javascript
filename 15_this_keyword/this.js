"use strict";
//this in the global space

console.log(this); //in the browser this keyword is the globalobject and window and it also diffrent in the node js

//inside the non-strict mode (thid substituion will happen)

//this inside the function

function x() {
  //inside the function the value of this keyword will be depend upon the strict mode and non strict mode
  console.log(this); //used strict mode so value will be the undefined without strict mode the value will be window obeject
}
//this keyword value depends on how the function is called
x(); //undefined
window.x(); //give the window object

//this keyword inside the objects method

const obj = {
  a: 10,
  x: function () {
    console.log(this); //here the value of the this keyword is refer to the obj
  },
};

obj.x();

//call , apply and bind methods (sharing method)

const student = {
  name: "Yogesh",
  printName: function () {
    console.log(this);
  },
};

//we want to share the upper printname method to the student2 object 

student.printName()

const student2 = {
  name: "megs",
  
};

student.printName.call(student2) //now the value of the this will be the student2

