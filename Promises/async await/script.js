function getData(dataId)
{
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log("Data=",dataId);
            resolve('success');
        },3000);
    })
}
async function getAllData(){
    console.log("fetching data1....");
    await getData(1);
    console.log("fetching data2....");
    await getData(2);
    console.log("fetching data3....");
    await getData(3);
    console.log("All data fetched");
}
// getAllData();
//IIFE-Immediate Invoked Function Expression 
//another method
(async function(){
    console.log("fetching data1....");
    await getData(1);
    console.log("fetching data2....");
    await getData(2);
    console.log("fetching data3....");
    await getData(3);
    console.log("All data fetched");
})();