let first = 5;
let second = 7;
console.log(first, second);
//---------------------------------------------
// Wrong appraoch------
// first = second;
// second = first;

// Method 1
// const temp = first;
// first = second;
// second = temp;

// Method 2
[first, second] = [second, first]
console.log(first, second); 