var First = (name) =>{
    var wishes = `hello ! Good Morinig`;
//   this is closure  
    const Second =() =>{
        var Name = "siva";
        console.log(`${name} ${wishes} ${Name}`);
    }
    return Second(); // end closure
}
var newF = First("vasu");


/* the inner function of Second() has access of wishes
   this Second() is called is called closure .this first() is parent */


   function First1(name){
       var wishe =  `hello ! Good night`;
       function Second(){
        console.log(`${name} ${wishe}`);
       }
       return Second();
   }

   First1("honey")