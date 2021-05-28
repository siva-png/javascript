class student{
    constructor(name,age,section){
        this.name =name,
        this.age =age,
        this.section=section;
    }
}
StudentData = new student('siva','18','Tenth');
StudentData1 = new student('kiran','20','B');
StudentData2 = new student('sai','15','c');

console.log(StudentData,'\n',StudentData1,'\n',StudentData2);