const readlineSync = require('readline-sync');
const chalk = require('chalk');
const process = require('process');
const app = require('./resource/app');
const converter = require('./resource/converter');

console.clear();
app.displayInfo();
init();

function init() {
    const input = readlineSync.question(chalk.green.bold('English:') + ' ');
    if (!input) {
        if (readlineSync.keyInYN('Want to exit?')) {
            console.log(chalk.blue('Bye bye...'));
            process.exit();
        } else {
            init();
        }
    } else {
        app.displayData(converter.sentenceToMorse(input));
        init();
    }
}




