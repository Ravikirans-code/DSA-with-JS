//https://medium.com/@HelloMoto69/patterns-in-javascript-1992ae52a26c

// for loop

let res = '';
for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= i; j++) {
        res += '*'
    }
    res += '\n'
}

console.log(res)
/* 
*
**
***
****
*****
*/

let res1 = '';
for (let i = 1; i <= 5; i++) {
    for (let j = 5; j >= i; j--) {
        res1 += ' ';

    }
    for (let k = 1; k <= i; k++) {
        res1 += '*'
    }
    res1 += '\n'
}

console.log(res1)
/*
     *
    **
   ***
  ****
 *****

*/


let rows = 5;

// pattern variable carries the final pattern in string format
let pattern = "";

// outer loop runs for `rows` no. of times
for (let n = 1; n <= rows; n++) {
   // Inner Loop - I -> prints spaces
   for (let space = 1; space <= rows - n; space++) {
      pattern += " ";
   }

   // Inner Loop - II -> prints stars
   for (let num = 1; num <= 2 * n - 1; num++) {
      pattern += "*";
   }
   pattern += "\n";
}
console.log(pattern);





let res2 = '';

for(let i = 5; i>=1;i--){

    for(let j = i; j>=1;j--){
        res2 +=j;
    }
    res2 += '\n'
}
console.log(res2)


// while loop

