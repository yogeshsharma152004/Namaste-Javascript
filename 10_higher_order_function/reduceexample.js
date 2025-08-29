//reduce function example

const user = [
    {firstName : "yogesh" , lastName : "sharma" , age:21},
    {firstName : "lorf" , lastName : "snow" , age:21},
    {firstName : "virat" , lastName : "kohli" , age:36},
    {firstName : "rohit" , lastName : "sharma" , age:38},
];


//=> reduce function example

//now we want to find that the pople with the same age 
//{21:2 , 36:1 , 38:1} like this 

const output = user.reduce(function(acc ,curr){

    if(acc[curr.age]){
         acc[curr.age]  = ++acc[curr.age]
    }
    else{
        acc[curr.age] = 1
    }
    return acc;

},{})

console.log(output);
