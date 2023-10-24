class Ola{
    constructor(BaseFare=15,costperMinte=1,costperMile=1,bookingFee=30,time=1,mile=2){
        this.BaseFare=BaseFare;
        this.costperMinte=costperMinte;
        this.costperMile=costperMile;
        this.bookingFee=bookingFee;
        this.time=time
        this.mile=mile;
    }
    totalPrice(time=this.time,mile=this.mile){
        console.log(this.BaseFare)+(this.bookingFee)+(this.costperMinte)
        (this.costperMinte)+(this.time)+(this.mile)
    }
    
}
let value=new Ola();
value.totalPrice(50,30)
value.totalPrice(15,20)