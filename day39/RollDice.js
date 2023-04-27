let results = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0
  };
  let maxCount = 10;
  let isMaxCountReached = false;
  
  while(!isMaxCountReached){
    let num = Math.floor(Math.random() * 6) + 1;
    results[num]++;
    console.log("Die Rolled: ", num);
    for(let key in results){
      if(results[key] == maxCount){
        console.log("Max Count Reached for Number: ", key);
        isMaxCountReached = true;
      }
    }
  }
  
  let maxNum = 1, minNum = 1;
  for(let key in results){
    if(results[key] > results[maxNum-1]){
      maxNum = key;
    }
    if(results[key] < results[minNum-1]){
      minNum = key;
    }
  }
  
  console.log("Results: ", results);
  console.log("Number that Reached Maximum Times: ", maxNum);
  console.log("Number that Reached Minimum Times: ", minNum);
  