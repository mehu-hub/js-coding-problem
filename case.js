const userName = 'BlackPink';
const userInput = 'blackpink';

console.log(userInput.toLowerCase());
console.log(userInput.toUpperCase());
console.log(userInput.toLocaleLowerCase());

if(userName.toLocaleLowerCase() === userInput.toLocaleLowerCase()){
    console.log('Valid User');
}
else{
    console.log('invalid user');
}