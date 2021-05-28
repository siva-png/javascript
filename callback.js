/* 
 Callbacks
In javascript, a callback is simply a function that is passed to another function as a parameter 
and is invoked or executed inside the other function. Here a function needs to wait for another 
function to execute or return value and this makes the chain of the functionalities 
(when X is completed, then Y executed, and it goes on.). This is the reason callback is generally 
used in the asynchronous operation of javascript to provide the synchronous capability.
*/
 const Greeting = (name) => {
    console.log(`Hello ${name}`);
}

const ProcessUserName = (callback) =>{
    name="Greeks Frook";
    callback(name);
}

ProcessUserName(Greeting);

/* 
In the above example notice that Greeting passed as an argument (callback) to the ‘processUserName’ function.
 Before the ‘greeting’ function executed it waits for the event ‘processUserName’ to execute first.
*/

/* for 1000 -20 , 100-2 */
var today =new Date();
var year = `${today.getDay()}-${today.getMonth()}-${today.getFullYear()}`;
var time = `${today.getHours()}:${today.getMinutes()} ${ampm}`;
console.log(time)