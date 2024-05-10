#! /usr/bin/env node
import inquirer from "inquirer";

// Prompt the user to enter a sentence
let answers = await inquirer.prompt({
    name: "sentence",
    type: "input",
    message: "Please enter your sentence"

});
// Trimming the sentence and splitting it into words based on "spaces"
let words =answers.sentence.trim().split(" ");

// Analysis of user input sentence
console.log(words);

console.log(`\n  Word Count: ${words.length}`);


