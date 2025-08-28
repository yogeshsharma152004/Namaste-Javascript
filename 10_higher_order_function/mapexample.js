//map funciton example

const user = [
    {firstName : "yogesh" , lastName : "sharma" , age:21},
    {firstName : "lorf" , lastName : "snow" , age:21},
    {firstName : "virat" , lastName : "kohli" , age:36},
    {firstName : "rohit" , lastName : "sharma" , age:38},
];

//here we want the full name 
//["yogesh sharm" , "virat kohli"]

const output = user.map((x) => x.firstName + "" +x.lastName)

console.log(output);




