let max = parseInt(prompt("Enter the maximum number"));
while (!max) {
  max = parseInt(prompt("Enter a vaild number"));
}

const targetNum = Math.floor(Math.random() * max) + 1;

let guess = prompt("Enter you first guess! Type 'q' to quit");
let attempts = 1;

while (parseInt(guess) !== targetNum) {
  if (guess === "q") break;
  guess = parseInt(guess);

  if (guess > targetNum) {
    guess = prompt("Too high, guess again!");
    attempts++;
  } else if (guess < targetNum) {
    guess = prompt("Too low, guess again!");
    attempts++;
  } else {
    guess = prompt("Invalid input. Please enter a number! Or 'q' to quit.");
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
