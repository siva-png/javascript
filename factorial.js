// Factorial
let fac = 1;
var Number =5;
for(i=1;i<=Number;i++){
     fac=fac*i 
}
console.log(`Factorial of ${Number} is ${fac}`)

/*   

-> i=1 -> 1*=1 =1
3 = 1*2*3 = 6


*/

function giveN(n){
    if(n==0 || n==1){
        return 1;
    }else{
        return n*giveN(n-1);
    }

}
console.log(giveN(4))
