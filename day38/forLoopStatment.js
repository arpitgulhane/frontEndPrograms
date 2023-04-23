let dogs =[" bulldog","Labrador","beagle"]
var alldogs=""

for(var i=0;i<dogs.length;i++){
    alldogs+=dogs[i]+" "
}
console.log("old"+alldogs)

//new dogs

alldogs=""
for(let dog of dogs){
        alldogs+=dog+" "
}
console.log("new = "+alldogs)