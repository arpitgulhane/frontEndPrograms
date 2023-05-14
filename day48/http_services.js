// function showTime(){
//     const date = new Date()
//     return date.getHours()+"Hrs"+date.getMinuites()+"Mins"+date.getSeconds()+"sec"

// }
// function showSessionExpire(){
//     console.log("Activity-B : Your Session Expre at "+showTime())

// }

// console.log("Activity-A trigged at Activity-B at "+showTime())
// setTimeout(showSessionExpire , 1000)
// console.log("Activity-A trigged at Activity-B at "+showTime()+"will wxecute after 1 min")


let XMLHttpRequest= require("xmlhttprequest") .XMLHttpRequest;
function makeAJAXCatt(methodType, url, callback, async= true,data=mull)
let xhr = new XMLHttpRequest();
xhr.onreadystatechange = function(){
    console. tog("State Changed Called. Ready State: "+xhr.readyState+" Status"+xhr.status);
    if (xhr.readyState===4){
    // Matching all 200 Series Responses
    if (xhr.status=== 200 || xhr.status === 201){
    callback( xhr. responseText) ;
    }else if (xhr.status >= 400) {
    console.log("Handle 400 Client Error or 500 Server Error");
    }
}


xhr.open(methodType, url, async) ;
if (data) {
console.log (JSON.stringify( data));
xhr.setRequestHeader("Content-Type","application.json")
xhr.send(JSON.stringify(data));
}
else xhr.send();
console.log (methodType+" request sent to the server");
}

const getURL ="http://127 .0.0.1:3000/emptoyees/1" ;

function getUserDetaits(data){
console.log("Get user data :"+data)
}

makeAJAXCall("GET", getURL, getUserDetaiIs)
const deleteURL = "http://localhost:3000/employees/4";
function userDeleted(data){
console.log("User Deleted "+data)
}

makeAJAXCall( "DELETE" ,deleteURL, userDeIeted, false) ;
const postURL= "http://tocalhost:3000/employees";

const emplData = {"name": "Harry" ,"salary" :"5000"};
function userAdded(data){
console.log ( "User Added: "+data)
}
makeAJAXCall("post",postURL, userAdded, true, emptData) ;

// UC 3

let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
function makePromiseCall(meth0dType, url, async = true, data= null) {
return new Promise(function (resolve, reject) {
let xhr= new XMLHttpRequest();
xhr.onreadystatechange = function(){
    console.log ("State Changed Called. Ready State: "+xhr.readyState+" status")
    if(xhr.status.toString().match('^[2][0-9]{2}$')){
        resolve(xhr.responseText)
    }else if(xhr.status.toString().match('^[4,5][0-9]{2}$')){
        reJect({
            status: xhr.status,
            statusText: xhr. statusText
        })
    console.log("XHR Failed") ;
    }
}

xhr. open(meth0dType, url, async) ;
if (data) {
console.log(JSON.stringify(data));
xhr.setRequestHeader("Content—Type", "application/json") ;
xhr.send(JSON. stringify(data) ) ;
}else xhr.send();
    console.log (methodType+" request sent to the server") ;

});
}

const getURL= "http://127.0.0.1:3000/employees/1" ;

makePromiseCalt("GET", getURL, true).then( responseText {
console.log("Get user data :"+responseText)
})
.catch(error => console.log("GET Error Status: "+JSON. stringify(error) ) ) ;

const deleteURL= "http://127.0.0.1:3000/employees/1" ;

makePromiseCalt("GET", deleteURL, true).then( responseText {
console.log("user delete :"+responseText)
})
.catch(error => console.log("GET Error Status: "+JSON. stringify(error) ) ) ;

const postURL = "http://tocathost:3øøø/emptoyees";
const emplData= {"name": "Harry" , "salary " : "5000"};
makePromiseCall("post", postURL, true, emplData).then(responseText => {
console.log("User Added: "+responseText)
})
.catch(error => console.log("POST Error Status :"+JSON.stringify(error) ) ) ;


