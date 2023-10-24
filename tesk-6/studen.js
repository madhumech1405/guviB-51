class person{
    constructor(Name,FatherName,MotherName,Gender,Age,Address,MobileNo,Email,Lauguage){
        this.Name=Name;
        this.FatherName=FatherName;
        this.MotherName=MotherName;
        this.Gender=Gender;
        this.Age=Age;
        this.Address=Address
        this.MobileNo=MobileNo;
        this.Email=Email;
        this.Lauguage=Lauguage;
   }
   personName(){
    return`My name is ${this.Name}`
   }
   personFatherName(){
    return`my father name is ${this.FatherName}`;
   }
   personMotherName(){
    return `my mother name is ${this.MotherName}`;
   }
   personGender(){
    return `my Gender is ${this.Gender}`;
   }
   personAge(){
    return `my Age is ${this.Age}`;
   }
   personAddress(){
    return `my Address is ${this.Address}`;
   }
   personMoileNo(){
    return `my MobileNo is ${this.MobileNo}`;
   }
   personEmail(){
    return `my Email is ${this.Email}`;
   }
   personLauguage(){
    return `my Lauguage is ${this.Lauguage}`;
   }
}
 let personObj=new person("madhusudhanan","jaganathan","sinthiya","male","27","salem","8838489260","madhumech1405@gmail.com","tamil")

console.log(personObj.personName());
console.log(personObj.personFatherName());
console.log(personObj.personMotherName());
console.log(personObj.personGender());
console.log(personObj.personAge());
console.log(personObj.personAddress());
console.log(personObj.personMoileNo());
console.log(personObj.personEmail());
console.log(personObj.personLauguage());





