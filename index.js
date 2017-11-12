// Code your solutions in this file
for printBadges(arrayNames){
  arrayNames  =["james","john","jean"]

  for(let i = 0 ; i < arrayNames.length; i++){

    console.log(`welcome ${arrayNames[i]}! You are employee #${i+1}.`)
  }
  return arrayNames
}


function coinToss() {
  return Math.Random() >= 0.5;
}

function tailsNeverFails() {
  let counter = 0
  
}