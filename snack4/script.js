const  num= (prompt("inserire numero di 4 cifre"));
let sum = 0;

for(let i = 0; i < num.lenght; i++){
    sum += parseInt(num[i]);
}

console.log(sum);