import readlineSync from 'readline-sync';

const greeting = () => {
    console.log('Welcome to the Brain Games!');
    const userName = readlineSync.question('May I have your name? ');
    console.log('Hi' + ${userName} + '!');
}
function getRandomNum(max) {
    return Math.floor(Math.random() * max);
  }

  
  function evenGame() {
console.log('Answer "yes" if the number is even, otherwise answer "no".');
( let i = 0; i < 3; i+=1 ) 
const num = getRandomNum(16);
console.log('Question:'${num})
const ques = readlineSync.question('You answer:');

const checkone = (num % 2 === 0) && (ques === 'yes');
const checktwo = (num % 2 !== 0) && (ques !== 'no');

if (checkone === true || checktwo === true) {
  console.log('Correct!')
} else {
  const warn = (ques === 'yes' ? 'no' : 'yes');
  const error = `"'${ques}'is wrong anser ;(. Correct answer was '${warn}'\nLet's try again, '${userName}'`";
  return error
}
  }
  console.log(`Congratulations, ${userName}!`)
