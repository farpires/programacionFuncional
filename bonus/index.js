let emails= ['fra@gmail.com','loop@outlook.com','red@gmail.com'];

//filter en reduce
let reducer = function(acc,currentEmail, index){
    if (index % 2 === 0) {
        acc.push(currentEmail);
    }
    return acc;
}
console.time("Reducer");
emails.reduce(reducer,[]);
console.timeEnd("Reducer");
console.time("Filter");
emails.filter(function(item, index){
    return index % 2 === 0;
});
console.timeEnd("Filter");