const getdata = (dataid, getnextdata) => {
    setTimeout(() => {
        console.log("Data=", dataid);
        if (getnextdata) {
            getnextdata();
        }
    }, 2000);
}
getdata(2, () => {
    console.log("getting data3....");
    getdata(3,()=>{
        console.log("getting data4....");
        getdata(4,()=>{
            console.log("getting data5....");
            getdata(5);
        })
    });
});