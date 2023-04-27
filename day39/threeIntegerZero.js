let arr = [-5, 2, 8, -1, 0, 6, -3];
let n = arr.length;

for(let i=0; i<n-2; i++){
  for(let j=i+1; j<n-1; j++){
    for(let k=j+1; k<n; k++){
      if(arr[i]+arr[j]+arr[k] == 0){
        console.log("Sum of "+arr[i]+", "+arr[j]+" and "+arr[k]+" is Zero.");
      }
    }
  }
}
