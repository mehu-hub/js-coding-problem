function maxInarray(numbers){
    let largest = numbers[0];
    for(let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index];
        if(element > largest){
            largest = element;
        }
    }
    return largest;
}
const height = [155, 251, 184, 178, 199, 145, 355]
const tallest = maxInarray(height);
console.log('tallest person is', tallest);
//-------------------------------------------

function minInarray(num){
    let minimum = num[0];
    for(var i = 0; i < num.length; i++){
        const index = i; 
        const element = num[index];
        if(element < minimum){
           minimum = element;
        }
    }
    return minimum
}

const heights = [125, 165, 199, 144, 175, 111, 99, 122];
const lowest = minInarray(heights);
console.log('The lowest number is', lowest);