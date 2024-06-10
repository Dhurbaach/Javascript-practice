const URL="https://cat-fact.herokuapp.com/facts";
const btn=document.querySelector("#btn");
const catpara=document.querySelector("#catfact");
const URL2="https://cats-fact.herokuapp.com/facts/random";
const getCatFact=async()=>{
   console.log("getting data....");
  const response=await fetch(URL);
  console.log(response);
  let data= await response.json();
  catpara.innerText=data[0].text;
}
btn.addEventListener("click",getCatFact);