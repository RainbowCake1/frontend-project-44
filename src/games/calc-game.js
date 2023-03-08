import play from '../index.js';
import getRandNum from '../tools/randomnumbers.js';

function getRandOperation() {
  const rnd = Math.round(Math.random() * 2 + 1);
  if (rnd === 1) {
    return '-';
  } if (rnd === 2) {
    return '+';
  }
  return '*';
}

function calc(num1, oper, num2) {
  switch (oper) {
    case '-': return num1 - num2;
    case '+': return num1 + num2;
    case '*': return num1 * num2;
    default: return null;
  }
}

const task = 'What is the result of the expression?';

const getRoundData = () => {
  const num1 = getRandNum(16);
  const num2 = getRandNum(16);
  const oper = getRandOperation();
  const question = `${num1} ${oper} ${num2}`;
  const answer = calc(num1, oper, num2);
  return [question, answer];
};
const result = () => play(task, getRoundData);

export default result;
