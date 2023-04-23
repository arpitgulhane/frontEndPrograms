let dogs=["Bulldog","Labra","beagle"]
let i =0

let alldogs=""
while(i<dogs.length){
    alldogs+=dogs[i]+" "
}
console.log(" while "+alldogs)

i=0
alldogs=""
do{
alldogs+=dogs[i]+" "
}while(i<dogs.length)

console.log(" "+alldogs)
