const radius = [3,2,1,4]

const area = function (radius){
    return Math.PI * radius * radius;
}

const cicumference = function (radius){
    return 2 * Math.PI * radius;
}

const diameter = function (radius){
    return 2 * radius
}

const calculate = function (radius, logic){
    const output = [];
    for (let i = 0; i< radius.length; i++) {
        output.push(logic(radius[i]))
    }
    return output;
}

console.log(calculate(radius,area))
console.log(calculate(radius,cicumference))
console.log(calculate(radius,diameter))