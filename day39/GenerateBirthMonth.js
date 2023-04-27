let birthMonths = [];
for(let i=1; i<=50; i++){
  let birthMonth = Math.floor(Math.random() * 12) + 1;
  birthMonths.push(birthMonth);
}

let monthsDict = {
  1: [],
  2: [],
  3: [],
  4: [],
  5: [],
  6: [],
  7: [],
  8: [],
  9: [],
   10: [],
   11: [],
   12: []
};

for(let i=0; i<50; i++){
  let month = birthMonths[i];
  monthsDict[month].push(i+1);
}

console.log("Birth Months: ", birthMonths);
console.log("Individuals with Same Birth Month: ", monthsDict);
