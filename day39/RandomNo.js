// Step 1: Generate 10 Random 3 Digit Numbers
let arr = [];
for(let i=0; i<10; i++){
  let num = Math.floor(Math.random() * 900) + 100;
  arr.push(num);
}

// Step 2: Find 2nd Largest and 2nd Smallest Element without Sorting the Array
let largest = arr[0], secondLargest = arr[0], smallest = arr[0], secondSmallest = arr[0];
for(let i=0; i<10; i++){
  if(arr[i] > largest){
    secondLargest = largest;
    largest = arr[i];
  }
  else if(arr[i] > secondLargest && arr[i] != largest){
    secondLargest = arr[i];
  }
  if(arr[i] < smallest){
    secondSmallest = smallest;
    smallest = arr[i];
  }
  else if(arr[i] < secondSmallest && arr[i] != smallest){
    secondSmallest = arr[i];
  }
}

console.log("Generated Array: ", arr);
console.log("2nd Largest Element: ", secondLargest);
console.log("2nd Smallest Element: ", secondSmallest);
