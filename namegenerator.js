let rand=Math.random();
let adje,shop_name,postfix;
function gener(adje,shop_name,postfix) {
    console.log(`${adje} ${shop_name} ${postfix}`);
}
if(rand<0.33)
{
    adje="Crazy"
}
else if(rand<0.66 && rand>=0.33)
{
    adje="Amazing"
}
else{
    adje="Fire"
}

rand=Math.random();
if(rand<0.33)
{
   shop_name="Engine"
}
else if(rand<0.66 && rand>=0.33)
{
    shop_name="Foods"
}
else{
    shop_name="Garments"
}

rand=Math.random();
if(rand<0.33)
{
    postfix="Bros"
}
else if(rand<0.66 && rand>=0.33)
{
    postfix="Limited"
}
else{
    postfix="Hub"
}
gener(adje,shop_name,postfix);