console.log('Hello World');

let name = "Sam"; //number,string,boolean,null,function,object
let age = 22;
let isSingle = true;
let hobby = ['Workout', 'photography']
let jsonObject = {name: name, age: age, isSingle: isSingle, hobby: hobby}
let run = function () {
    console.log (name + 'is running');
};

console.log(
    "My name is " + name, 
    "my age is " + age, 
    "am I taken?", + isSingle, 
    "my hobies", + hobby,
    run
);

console.log(jsonObject);

console.log(typeof name);

// if (age == 25) console.log('${age} == ${25}')
// else console.log('${age == ${25}}')


if (age >= 22) console.log("Im unemployed.");
else if (age >= 19 && age <= 21) console.log("College na");
else console.log("Bata pa");

// TODO: Refactor the if else statement above to a switch statement.
switch (true) {
  case (age >= 22):
    console.log("Im unemployed.");
    break;
  case age >= 19 && age <= 21:
    console.log("College na");
    break;
  default: console.log("hindi gumagana");
}

let a = 0;
// Loops
while (a < 10) {
  console.log("*");
  a++;
  if (a == 5) break;
}

for (let b = 0; b <= 10; b++) {
  console.log("x".repeat(b));
  if (b == 5) break;
}

// TODO:
/*
        *
       ***
      *****
     *******
    *********
     *******
      *****
       ***
        *
*/
hobby.forEach((hobbies, i) => {
    console.log(hobbies, i);
    if (i >= 1) return;
}) 

// requiring/importing other js files
const _functions = require('./function.js')
_functions.consoleMessage('Log this message')


function createDiamond (numberOfAsterisks){
    //if <numberOfAsterisks> is an odd number, add + 1
    //loop
    if (numberOfAsterisks % 2 != 0) {
        numberOfAsterisks++
    }
    
    console.log("\n\nnumberOfAsterisks = " + numberOfAsterisks)
    
    for (let z = (numberOfAsterisks/2)-1; z > 0; z--){
        let a = numberOfAsterisks-(z*2)
        console.log(" ".repeat(z) + "*".repeat(a));
    }
    for (let y = 0; y < (numberOfAsterisks/2); y++){
        let b = numberOfAsterisks-(y*2)
        console.log(" ".repeat(y) + "*".repeat(b));
        
    }
}

createDiamond(25);