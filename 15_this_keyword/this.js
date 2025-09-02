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

student.printName();

const student2 = {
  name: "megs",
};

student.printName.call(student2); //now the value of the this will be the student2

//this keyword inside the arrow function

//here we have the arrow function and the value of the this will be not in this object it depend on the its enclosing lexical context means that where it was written so here the object will written in the global space so here the this keyword will not behave like the inside the function it will behave like the this is present in the global space and the value will be the global object

const obj3 = {
  a: 10,
  x: () => {
    console.log(this);
  },
};
obj3.x();

//put the arrow function inside the normal function 
//so here the this kwyword behave like the it will lexically enclosed lexical context 
//here the value of the this will is the obj4

const obj4 = {
  a: 10,
  x: function () {
    const y = () => {
      console.log(this);
    };
    y()
  },
};

obj4.x()




