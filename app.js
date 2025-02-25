let max = parseInt(prompt("Enter the maximum number"));
while (isNaN(max) || max <= 0) {
  max = parseInt(prompt("Enter a vaild number"));
}

const targetNum = Math.floor(Math.random() * max) + 1;

let guess = prompt("Enter you first guess! Type 'q' to quit");
let attempts = 1;

while (parseInt(guess) !== targetNum) {
  if (guess === "q") break;

  attempts++;

  if (guess > targetNum) {
    guess = prompt("Too high, guess again!");
  } else if (guess < targetNum) {
    guess = prompt("Too low, guess again!");
  } else {
    guess = prompt("Invalid input. Please enter a number!");
    continue;
  }
}

if (guess === "q") {
  console.log("Ok, you quit :(");
} else if (attempts === 1) {
  console.log("Wow, you got it on the first try!?");
} else if (attempts > 1) {
  console.log(`You got it in ${attempts} guesses!`);
}
