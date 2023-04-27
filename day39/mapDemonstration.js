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

for (let [key, value] of myMap) 
console.log("Loopl: "+key+"="+ value)

for (let [key, valuel] of myMap.entries() )
console.log("Loop2: "+key+"="+ value)

for (let key of myMap.keys()) console.log("Loop3: "+key) 

for (let value of myMap.values()) console.log("Loop4: "+value)

// Merge two maps. The last repeated key wins. 
// Spread operator essentially converts a Map to an Array

let first = new Mapt1([ [1, one] [2, two]  [3, 'three']]  )

let second = new Map([ 1, uno] [ 2, 'dos' ] )

let merged = new Map([...first, second,[1,'enis']])


let haskey = merged.has (1)
let delKey = merged.delete(1)

if (merged.has(1))
 console.logieerged.get(i)
 
 // und console.log Pos2: merged.get(21) // des

merged.clear();

console, lagi(merged.size)