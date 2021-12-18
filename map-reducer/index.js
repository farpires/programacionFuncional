// example 1
// 1 - 
let numbers = [2,5,8]
let newNum = numbers.map(number=> Math.pow(number,2));
console.log(newNum);

//2 - 
let reducer  = function(accumulator, number ){
    return accumulator+ number;
}

console.log(numbers.reduce(reducer,0)); // -> 2+5+8 ->15

// example 2
let tools = ["vuejs","angular","react","angular","react"];

for (let i = 0; i < 100000000; i++) {
    tools.push("angular");
    
}

let resultados = {}

let reducerTools = function(accumulator, tool){
        if(accumulator[tool]){
            accumulator[tool] = accumulator[tool]+1;
        } else {
            accumulator[tool] = 1;
        }
        return accumulator;
}

console.time("Reducer");
let counters = tools.reduce(reducerTools, resultados);
console.timeEnd("Reducer"); 
console.log(counters);