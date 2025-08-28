//filter is used to filter the value from the arary

//here we want to filter the value is odd

const arr = [5,1,3,2,6]

function isOdd(x){
    return x%2
}

const output = arr.filter(isGreater)
console.log(output);

function isEven(x){
    return x%2 ===0
}


//find out the value id greater then 4

function isGreater(x){
    return x > 4;
}

/*

const output = arr.filter(function isEven(x){
    return x%2 ===0
})

const output = arr.filter((x) => x%2 ===0)
 */ // we can alos write this 