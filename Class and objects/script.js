let impData="Secrete Information";
class user{
    constructor(name,email){
        this.name=name;
        this.email=email;
    }
    viewData(){
        console.log(impData);
    }
}
class admin extends user
{   constructor(name,email){
    super(name,email);
}
    editData(){
        impData="Some new value";
    }
}
let std1=new user("Dhurba","Dhurba@gmail.com");
let std2=new user("Babita","anyone@gamil.com");
let std3=new admin("Admin","admin@email.com");