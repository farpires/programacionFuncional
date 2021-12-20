/*
You should make request on the following URL: 
https://next.json-generator.com/api/json/get/VkBw8XP2d 
-*****>   ujws7znw1a4s77h7fpp9gbr2nuuevh0dzfjnom67 
https://api.json-generator.com/templates/KvMz6Zubh1xv/data?access_token=ujws7znw1a4s77h7fpp9gbr2nuuevh0dzfjnom67
Get the JSON data and perform some operations on the data.
You must use high order functions such as: filter, map, reduce, forEach, etc…

    */

    fetch(`https://api.json-generator.com/templates/aPvEqPTRM2x_/data?access_token=ujws7znw1a4s77h7fpp9gbr2nuuevh0dzfjnom67`)
    .then(response => response.json())
    .then(result => {
        // console.log(result);
        main(result);
    })
    function main(employes){

        let reducerOwner = function(acc,employe, index){
            if (employe.roles.indexOf('owner') !== -1) acc.push(employe);
            return acc;
        }   
        const _employe = employes.filter(function(employe,index,array){
            return  employe.profile.dob.search('1989') != -1;
        }).reduce(reducerOwner,[]);
        console.log('_employe');
        console.log(_employe);


        const _employe1 = employes.some(e => e.roles[0] === 'owner' || e.roles[1] === 'owner');
        console.log('_employe1');
        console.log(_employe1);

        const _employe2 = employes.filter(function(employe,index,array){
            return  employe.profile.dob.search('1989') != -1;
        }).map(e=>({name:e.profile.name, email:e.email, roles: `${e.roles[0]} and ${e.roles[1]}`}))
        console.log('_employe2');
        console.log(_employe2);



        
    }