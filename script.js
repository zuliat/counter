// get access to the buttons
let incrementBtn = document.getElementById("increment-btn");

let resetBtn = document.getElementById("reset-btn");

let decrementBtn = document.getElementById("decrement-btn");
let starterZerro = document.querySelector(".starter")


let count = 0;

//function for increment
function increment() {
    count++
    starterZerro.textContent = count
}

//function for decrement
function decrement() {
    count--
    starterZerro.textContent = count

    
}
 // function for reset
 function reset() {
    starterZerro.textContent = 0

    
 }