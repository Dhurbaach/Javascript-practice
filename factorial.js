let arr1=[1,2,3,4,5,6]
const fact=(a,b)=>{
    return a*b;
}
const c=arr1.reduce(fact);
let f=1;
console.log("The factoiral of arr1 is",c);
for (let index = 1; index <= 6; index++) {
     f=f*index;
}
console.log("Second method:",f);