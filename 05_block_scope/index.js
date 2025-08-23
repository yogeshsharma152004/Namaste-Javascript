//=> so here the {} is known as a block and inside that we can access the mutiple statement 




/*{
    var a = 10;
    let b = 20;
    const c = 30;


    //here the let and const we only access the inside thid blocke scope not outside it but we can access the var inside and the outside the scope 
    console.log(a);
    console.log(b);
    console.log(c);
    
}

//=> here we only access the var outside the scope and we dont access the let and const outside the scope here 

console.log(a);
//console.log(b);
//console.log(c);*/

//=> SHADOWING IN THE JS 

//=> shadowing in the js menas the we have the same variable outside the scope is called as a shadowing

var a = 100;
let b = 100;
const c = 100;

{
    var a = 10;
    let b = 20;
    const c = 30;


    
    console.log(a);
    console.log(b);
    console.log(c);
    
}

console.log(a);
console.log(b);
console.log(a);

// so here we have the var a inside and the outside the block but if we access it outside and the inside the scope then it will return the value both the time 10 so the insid the block var a shadow the value outside the blck var a because they both are in the same memory space in the global 


//=> if we can see this case for the let then it will give the diffrent value inside and the ouside the block so in the block if we see then it will give the value 20 and outside it will give the value of b is 100 beacuse they both are in the diffrent scope or block same is happening for the const same as a let 


