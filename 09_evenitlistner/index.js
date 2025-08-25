//call back with eventlistner
//here we call back the function xyz

/*document.getElementById("clickme").addEventListener("click",function xyz(){
    //console.log("Button clicked ");
    
})*/


//closure with the eventlistner

function counter(){

let count = 0;
document.getElementById("clickme").addEventListener("click",function xyz(){
    console.log("Button clicked " ,++count);
    
})
}

counter()


