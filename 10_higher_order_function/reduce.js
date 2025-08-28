//reduce means that it used in the place where we want tp take the all elements of the aray and come up with the single value out of that

//sum or max number we use reduce




//const arr = [5,1,3,2,6]

/*//=> this is the way where we write the code in the non functional way

function findSum(arr){
    let sum = 0;
    for(let i = 0; i<arr.length; i++){
        sum = sum + arr[i]
    }
    return sum;
}

console.log(findSum(arr));


//now we write the code in the reduce function

const output = arr.reduce(function(acc,curr){
   
    acc = acc + curr;
   return acc;
},0);//we have to pass the initial value here like 0 in the reduce function

console.log(output)*/

//now we want to find the max value

//=> first we write the code in the non functional way

const arr = [5,1,3,2,6]

function findMax(arr){
    let max = 0;
    for(let i = 0; i<arr.length; i++){
        if(arr[i]>max){
            max = arr[i]
        }
    }
    return max;
}

console.log(findMax(arr));

//with the reduce

const output = arr.reduce(function(max,curr){
      if(curr > max){
        max = curr
      }
      return max
},0)

console.log(output)