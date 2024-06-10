const getPromise=()=>{
    return new Promise((resolve,reject)=>{
            console.log("I am a promise");
            // resolve('promise resolved');
            reject('network error');
            })
}
let promise=getPromise();
promise.then(()=>{
console.log("promise fulfilled");
});
promise.catch((err)=>{
    console.log("promise is not fulfilled",err);
})
