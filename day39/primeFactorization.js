function primeFactors(n){
    let arr = [];
    for(let i=2; i<=n; i++){
      while(n%i == 0){
        arr.push(i);
        n /= i;
      }
    }
    return arr;
  }
  
  let num = 84; // Enter the Number
  let factors = primeFactors(num);
  console.log("Prime Factors of "+num+": "+factors);
  num =Number(num)
  console.log(typeof(num))