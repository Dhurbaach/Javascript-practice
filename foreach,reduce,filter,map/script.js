let arr=[1,2,3,4,5,6];
arr.forEach((val)=>{
    let k=val*val;
    console.log(k);
})
let newArray=arr.map((val)=>{
    return val*2;
})
console.log(newArray);
let evenArray=arr.filter((val)=>{
    return val>4;
})
console.log(evenArray);
//using filter method to display marks of students scoring 90 or above
let marks=[90,98,70,60,50,40,30,20,100];
let highMarks=marks.filter((val)=>{
    return val>=90;
})
  console.log(highMarks);
  //take number from user and create array from 1 to n
  let n=parseInt(prompt("enter number"));
  let arr1=[];
  for(let i=1;i<=n;i++){
    arr1.push(i);
  }
  let sumArray=arr1.reduce((prev,next)=>{
    return prev+next;
  })
  let productArray=arr1.reduce((prev,next)=>{
    return prev*next;
  })
  console.log(sumArray);
  console.log(productArray);