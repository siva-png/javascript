var today = new Date();


var dd = today.getDate() ;
var mm= today.getMonth() ;
var yy=today.getFullYear();

if(dd<10){
    dd='0'+dd;
}
if(mm<10){
    mm='0'+mm;
}
today = `${dd}-${mm}-${yy}`;
// dd-mm-yy ,

//var newformat = hours >= 12 ? 'PM' : 'AM'; 

console.log(today);

var date1 = new Date("06/30/2019");
var date2 = new Date("07/30/2019");
  
// To calculate the time difference of two dates
var Difference_In_Time = date2.getDay() - date1.getDay();
  console.log(Difference_In_Time)