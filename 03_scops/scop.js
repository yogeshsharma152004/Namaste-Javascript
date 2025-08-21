//=> Scops and lexical environement in the js 

function a(){
    var b = 10;
    c()
    function c(){
        console.log(b)
    }
}

a()


//console.log(b)