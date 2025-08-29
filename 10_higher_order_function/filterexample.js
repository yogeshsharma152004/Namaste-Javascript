//filter function example 

const user = [
    {firstName : "yogesh" , lastName : "sharma" , age:21},
    {firstName : "lord" , lastName : "snow" , age:21},
    {firstName : "virat" , lastName : "kohli" , age:36},
    {firstName : "rohit" , lastName : "sharma" , age:38},
];

//we want to filter out the first name of the all people whose age is less then 30

//here we chaining with the map

const output = user.filter ((x) => x.age < 30).map((x) =>x.firstName)

console.log(output)

//we can also do it with the reduce

const output1 = user.reduce(function(acc, curr){
    if(curr.age < 30){
        acc.push(curr.firstName);  //if age of current user is < 30, push there firstName into the acc array
    }
    return acc;
}, [ ]);  //initially, the acc will be an empty array

console.log(output);