let numList = []
let sum = 0;

do {
    let number = parseInt(prompt('inserire numero'));
    numList.push(number);
    sum += parseInt(number);
    console.log(number);
    console.log(numList);
} while(sum < 50);

console.log(sum);