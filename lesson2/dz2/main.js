let triangle = "";
for (let i = 1; i <= 7; i++){
    for (let j = 0; j < i; j++){
        triangle += "*"
    }
    triangle += '\n';
}
console.log(triangle)

for( let i = 0; i<= 100; i++){
    if (i % 3 === 0 && i % 5 === 0){
        console.log('FizzBuzz', i);
    }
    else if(i % 3 === 0){
        console.log('Fizz', i);
    }else if(i % 5 === 0){
        console.log('Buzz',i);
    }
    console.log(i);
}