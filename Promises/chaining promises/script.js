function getData(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data=", dataId);
            resolve("success");
        }, 4000);
    }
    )
}
getData(1).then((res) => {
    console.log("fetching another data....");
    return getData(2);
}).then((res) => {
    console.log("fetching another data....");
    return getData(3);
}).then(() => {
    console.log("All data fetched");
})
// function asyncfun2() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data2");
//             resolve("success");
//         },4000);
//     }
//     )
// }
// console.log("fetching data1....");
// let p1=asyncfun1();
// p1.then((res)=>
// {
//     console.log(res);
//     console.log("fetching data2....");
//     let p2=asyncfun2();
//     p2.then((res)=>{
//         console.log(res);
//     })
// })
