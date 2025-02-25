# GuessingGame

Just a small guessing game to practice using while loops and conditions.

The user is prompted to set a maximum number which will be used to generate a random number from 1 to the maximum

User can then enter in guesses and will be prompted if the input is invalid and may also exit the game early by entering "q" as a guess

If the user selects "q" then the console displays: "Ok, you quit :("

If the user manages to guess it on the first try, it displays: "Wow, you got it on the first try!?");

And if the user guesses it in greater than 1 guess, it displays: "You got it in X guesses!"

Where X is set as a template literal of the variable attempts which increments every guess to track the total number of guesses, not counting when the user enters an invalid input.
