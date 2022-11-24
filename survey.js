const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Whats your name? Nicknames are also acceptable: ', (answer1) => {
  rl.question('Whats an activity you like doing: ', (answer2) => {
    rl.question('What do you listen to while doing that: ', (answer3) => {
      rl.question('Which meal is your favourite: ', (answer4) => {
        rl.question('Whats your favourite thing to eat for that meal?: ', (answer5) => {
          rl.question('Which sport is your absolute favourite?: ', (answer6) => {
            rl.question('What is your superpower? In a few words, tell us what you are amazing at: ', (answer7) => {
              console.log(`Thank you for your valuable feedback: ${answer1} loves ${answer2} and listening to ${answer3}. ${answer1}'s favourite meal is ${answer4} and their favourite food is ${answer5}. They love ${answer6} and are great at ${answer7}`);


              rl.close();
            });
          });
        });
      });
    });
  });
});
