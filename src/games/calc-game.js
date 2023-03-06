import play from '../tools/logic.js';
import randNum from '../tools/randomnumbers.js';
import randOperation from '../tools/randomoperation.js';

function calc(num1, oper, num2) {
  switch (oper) {
    case '-': return num1 - num2;
    case '+': return num1 + num2;
    case '*': return num1 * num2;
    default: return null;
  }
}

const task = 'What is the result of the expression?';

const game = () => {
  const num1 = randNum(16);
  const num2 = randNum(16);
  const oper = randOperation();
  const question = `${num1} ${oper} ${num2}`;
  const answer = calc(num1, oper, num2);
  return [question, answer];
};
const result = () => play(task, game);

export default result;
