const randomDelay = () => {
    return new Promise((resolve, reject) => {
        let rand = 1 + Math.floor(Math.random() * 7);
        setTimeout(() => {
            resolve();
        }, rand * 1000);
    })
}
const addItem=async(item)=>{
    await randomDelay();
    let div=document.createElement("div");
    div.innerText=item;
    document.body.append(div);
}
async function main(){

   let t= setInterval(() => {
        let last=document.body.getElementsByTagName("div");
        last=last[last.length-1];
        if(last.innerHTML.endsWith("...")){
            last.innerHTML=last.innerHTML.slice(0,last.innerHTML.length-3);
        }
        else{
        last.innerHTML=last.innerHTML+".";
        }
    }, 100);
const Message = [
    "Initializing Hacking...",
    "Reading your Files...",
    "Password files Detected...",
    "Sending all the passwords and personal files to server...",
    "Cleaning up..."
]
for (const item of Message) {
    await addItem(item);
}
await randomDelay();
clearInterval(t);
}
main();