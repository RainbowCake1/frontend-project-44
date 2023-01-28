import readlineSync from 'readline-sync';

function getRandomNum(max) {
    return Math.floor(Math.random() * max);
  }
  function game(userName) {
console.log('Answer "yes" if the number is even, otherwise answer "no".');
for (let i = 0; i < 3; i++ ) {
const num = getRandomNum(16);
console.log(`'Question:'${num}`);
const ques = readlineSync.question('You answer:');

const checkone = (num % 2 === 0) && (ques === 'yes');
const checktwo = (num % 2 !== 0) && (ques === 'no');

if (checkone || checktwo ) {
  console.log('Correct!');
} else {
  const warn = (ques === 'yes' ? 'no' : 'yes');
  const error = `"${ques}" is wrong anser ;(. Correct answer was '${warn}'. \nLet\'s try again, ${userName}`;
  console.log(error)
  return;
}
  }
  console.log(`Congratulations, ${userName}!`);
}
  
  function evenGame() {
console.log('Welcome to the Brain Games!');
    const userName = readlineSync.question('May I have your name? ');
    console.log('Hi ' + `${userName}` + '!');
    game(userName);
  }
  export default evenGame;
