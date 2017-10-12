function addNumbers (a,b)
{
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            if(typeof a ==='number' && typeof b === 'number')
             {
             resolve(a+b);
            }
            else{
                reject("Not a number");
            }
        },1000);
    });
}

addNumbers(10,20).then(function(temp){
    console.log("Promise success", temp);
},function(error){
    console.log("Promise error", error);
})