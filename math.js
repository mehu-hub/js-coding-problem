const result = Math.pow(3, 8);
console.log(result);
//----------------------------

const num1 = 25;
const num2 = 45;
const gap = Math.abs(num1 - num2);
if(gap < 5){
    console.log('You guys can be friend');
}
else{
    console.log('you guys stay apart');
}

//-------------------------------------

const number = 2.5516;
const fullNumber = Math.round(number);
console.log(fullNumber);
//---------------------
const number2 = 2.0001;
const fullNumber2 = Math.ceil(number2);
const fullNumber3 = Math.floor(number2);
// console.log(fullNumber2);
//---------------------
// Random
console.log(Math.random());
//---------
for(var i = 0; i < 20; i++){
    const random = Math.round(Math.random()*6);
    console.log(random);
}

