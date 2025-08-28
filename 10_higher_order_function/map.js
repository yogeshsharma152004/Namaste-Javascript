//map function is used for the transform the array

//=> here we want to transform the array into the double 
const arr = [5,1,3,2,6]

function double(x){
  return x * 2
}

function triple(x){
    return x * 3
}

function binary(x){
    return x.toString(2)
}

const output = arr.map(binary);
console.log(output)

/*const output = arr.map(function binary(x){
    return x.toString(2)
});

const output = arr.map((x) => x.toString(2));*/ //we can also write the code like this 