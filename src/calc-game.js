import readlineSync from 'readline-sync';

function randNum(max) {
  return Math.floor(Math.random() * max);
}

function randOperation() {
 const rnd = Math.round(Math.random() * 2 + 1);
 if (rnd === 1) {
  return '-'
 } else if ( rnd === 2) {
  return '+'
 } else {
  return '*'
 }
}

function calc(num1,num2,oper){
  switch(oper) {
    case '-': return num1 - num2;
    case '+': return num1 + num2;
    case '*': return num1 * num2;
  }
}

function game(userName) {
  console.log('What is the result of the expression?');
  for (let i = 0; i < 3; i++ ) {
    const num1 = randNum(16);
    const num2 = randNum(16);
    const opr = randOperation()
    console.log(`'Question:'${num1} ${opr} ${num2}`);
   const rightAnswer = calc(num1,num2,opr)
    const ques = readlineSync.question('You answer:');

    if (ques == rightAnswer) {
      console.log('Correct!');
    } else {
    console.log(`"${ques}" is wrong anser ;(. Correct answer was ${rightAnswer}. \nLet\'s try again, ${userName}`);
     return
    }
}
console.log(`Congratulations, ${userName}!`)
}

function gameCalc(){
  console.log('Welcome to the Brain Games!');
    const userName = readlineSync.question('May I have your name? ');
    console.log('Hi ' + `${userName}` + '!');
    game(userName);
}
export default gameCalc;