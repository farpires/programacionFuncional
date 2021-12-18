// programando "Imperativamente "
var numbers= [0,1,2,3,4,5,6,7,8,9];
for (let i = 0; i < numbers.length; i++) {
    numbers[i] = Math.pow(numbers[i],2);
}
console.log(numbers);


// programando "Funcionalmente "
var _numbers= [0,1,2,3,4,5,6,7,8,9];
let number_=_numbers.map(function(_number){
    return Math.pow(_number,2);
})
console.log(number_);