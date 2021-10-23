#!/usr/bin/env node

import program from "commander";
import createPassword from "./utils/createPassword.js";
import savePassword from "./utils/savePassword.js";
import color from "chalk";
import clipboardy from "clipboardy";

const log = console.log;

program.version('1.0.0').description('A Command-Line Password Generator');

program
    .option('-l, --length <integer>', 'length of password', '8')
    .option('-s, --save', 'save password to passwords.txt')
    .option('-nn, --no-numbers', 'exclude numbers')
    .option('-ns, --no-symbols', 'exclude symbols')
    .parse();

const { length, save, numbers, symbols } = program.opts();

// Call the createPassword module to generate password
const generatedPassword = createPassword(length, numbers, symbols);

// Call the savePassword module to save password to .txt file
if(save) {
    savePassword(generatedPassword);
}

// Copy generated password to clipboard
clipboardy.writeSync(generatedPassword);

// Output generated password
log(color.blue('Generated Password: ') + color.bold(generatedPassword));
log(color.yellow('Password Copied!'));

// TO-DO
// Clear passwords saved
// Save to database