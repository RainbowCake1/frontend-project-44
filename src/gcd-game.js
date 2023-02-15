import readlineSync from 'readline-sync';

function randNum(max) {
    return Math.floor(Math.random() * max);
  }
 

  function game(userName){
    console.log('Find the greatest common divisor of given numbers.');
    for (let i = 0; i < 3; i++ ){
        const num1 = randNum(16);
        const num2 = randNum(16);
        console.log(`'Question:'${num1} ${num2}`);
        const rightAnswer = gcd(num1,num2);
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

  function gcd(num1,num2) {
 if (num2 === 0){
  return num1
 }
 return gcd(num2,num1 % num2)
  }

  function gameGcd(){
    console.log('Welcome to the Brain Games!');
      const userName = readlineSync.question('May I have your name? ');
      console.log('Hi ' + `${userName}` + '!');
      game(userName);
  }
  export default gameGcd;