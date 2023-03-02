import play from "./logic.js";
import randNum from "./randomnumbers.js";

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

function calc(num1,oper,num2){
  switch(oper) {
    case '-': return num1 - num2;
    case '+': return num1 + num2;
    case '*': return num1 * num2;
  }
}

const task = 'What is the result of the expression?';

const game = () => {
  const num1 = randNum(16);
  const num2 = randNum(16);
  const oper = randOperation();
const question = `${num1} ${oper} ${num2}`;
  const answer = calc(num1,num2,oper)
  return [question,answer]
}
const result = () => play(task,game);

export default result