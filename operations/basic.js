let sum = (a, b) => {
    return a + b;
}

let minus = (a, b) => {
    return a - b;
}

let product = (a, b) => {
    return a * b;
}

let divide = (a, b) => {
    return a / b;
}

let power = (a,b)=>{
 return Math.pow(a,b)
}

let sqrt = (a)=>{
 return Math.sqrt (a)
}

let cbrt =(a)=>{
     return Math.cbrt (a)
}

module.exports = {
    sum,
    minus,
    product,
    divide,
    power,
    sqrt,
    cbrt
    
}