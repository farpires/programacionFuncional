let arrays = [[3,5,6],['a','b'], [5,9]];

let reducer = function (accumulator, array){
    return accumulator.concat(array);
}

let numbers = arrays
                .reduce(reducer,[])
                .filter((item)=> !isNaN(item));

console.log(numbers);

let emails= ['fra@gmail.com','loop@outlook.com','red@gmail.com'];

let emailsGmail= emails.filter(function(email, index, array){
    console.log(index);
    console.log(array);
    return email.indexOf("gmail.com")>0; // TRUE | FALSE 
});
console.log(emailsGmail);