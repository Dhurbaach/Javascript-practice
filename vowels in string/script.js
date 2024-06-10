let count=0;
const vowels=['a','e','i','o','u'];
function NoofVowels(str)
{
    for (const i of str) {
        if(vowels.includes(i))
            {
                count++;
            }
    }
    return count;
}
let a=NoofVowels("Harrye");
console.log("The number of vowels are:",a);
//using arrow function
const NoofVowels1=(str)=>{
    let count=0;
    const vowels=['a','e','i','o','u'];
    for (const i of str) {
        if(vowels.includes(i))
            {
                count++;
            }
    }
    return count;
}
let b=prompt("Enter the string");
console.log("The number of vowels are:",NoofVowels1(b));