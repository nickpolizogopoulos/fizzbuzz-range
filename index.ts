
fizzBuzz(10, 25);

function fizzBuzz(numberOne: number, numberTwo: number): void {

  for (let i: number = numberOne; i <= numberTwo; i++)
    if (i % 3 === 0 && i % 5 === 0) console.log(`${i}: FizzBuzz!`);
    else if (i % 3 === 0) console.log(`${i}: Fizz`);
    else if (i % 5 === 0) console.log(`${i}: Buzz`);
    else console.log(`${i}: -`);
    
}

