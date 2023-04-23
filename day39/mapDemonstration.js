let keyString = 'a string' 
let keyObj = {}

let keyFunc=function() {}

// setting the values

let myMap = new Map()

myMap.set(keyString, "value associated with 'a string'") 
myMap.set(keyObj, 'value associated with keyObj')
myMap.set(keyFunc, 'value associated with keyFunc')

77// getting the values

let size =myMap.size

let valStr= myMap.get(keyString)

let isKeyExist = myMap.has('a string')

for (let Ikey, value) of myMap) 
console.log("Loopl: "+key+=+ value)

for (let [key, valuel of myMap).entries() console.log("Loop2: "+key+= value)

for (let key of myMap.keys()) console.log("Loop3: "+key) for (let value of myMap.values()) console.log("Loop4: "value)

// Merge two maps. The last repeated key wins. // Spread operator essentially converts a Map to an Array

let first new Mapt1 11, one 1, 12, two 1, 3, 'three'] 1)

let second = new Map(1 11, uno!1, 12, 'dos 11)

Let merged = new Map(1...first, second,

Les haskey merged.has (1)

Let delKey merged.delete(1)

if (merged.has(3)3 console.logieerged.get(i)) // und console.log Pos2: merged.get(21) // des

merged.clear();

console, lagimerged.size)