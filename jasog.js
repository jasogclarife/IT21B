class shems{
    constructor(subject,day,time,instructor){
        this.subject=subject;
        this.day=day;
        this.time= time;
        this.instructor = instructor;
    }
    displayshems(){
        console.log("Subject: "+this.subject);
        console.log("Day: "+this.day);
        console.log("Time: "+this.time);
        console.log("Instructor: "+this.instructor);
        
    
    }
}
const shems1 = new shems("Contemporary World","Tuesday","7:30-9:00AM" ,"Loisel Buelban");
const shems2 = new shems("Event Driven Programming","Tuesday","12:00-12:30NN" ,"Cliff Evangelio");
const shems3 = new shems("Dance","Tuesday","10:00-12;00" ,"Cherry Mar Tutica");
shems1.displayshems();
shems2.displayshems();
shems3.displayshems();