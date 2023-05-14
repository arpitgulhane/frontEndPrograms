function showTime(){
    const date = new Date()
    return date.getHours()+"Hrs"+date.getMinuites()+"Mins"+date.getSeconds()+"sec"

}
function showSessionExpire(){
    console.log("Activity-B : Your Session Expre at "+showTime())

}

console.log("Activity-A trigged at Activity-B at "+showTime())
setTimeout(showSessionExpire , 1000)
console.log("Activity-A trigged at Activity-B at "+showTime()+"will wxecute after 1 min")





