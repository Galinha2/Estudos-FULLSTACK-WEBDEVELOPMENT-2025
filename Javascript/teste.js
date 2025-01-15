let rand = Math.random() * 100;

let nums = [];

rand = Math.floor(rand);
nums.push(rand);

function fizzBuzz () {
    if (rand % 3 === 0) {
        console.log('FIZZ');
    }
    
    else {
        console.log('BUZZ');
    }
};

fizzBuzz();
console.log(nums);