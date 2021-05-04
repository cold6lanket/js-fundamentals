// closures
function calculate(n) {
    return function (x) {
        return n + x;
    };
}

const fn = calculate(5);

console.log(fn(5));

// let's consider for loop as an example
// this code will give us 10 because the value of i becomes 10
// in global scope before 1s

for (var i = 0; i < 10; i++) {
    setTimeout(function() {
        console.log(i);
    }, 1000);
} // this will return 10 x10

// there is solution for this
// we add IIFE to store each value of i

for (var i = 0; i < 10; i++) {
    setTimeout((function(j) {
        return function() {
            console.log(j);
        };
    })(i), 1000);
}

// ES6 added new variable which is let
// we can solve above problem with minor changes

for (let i = 0; i < 10; i++) {
    setTimeout(function() {
        console.log(i);
    }, 1000);
} 

