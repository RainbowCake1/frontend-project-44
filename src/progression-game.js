import readlineSync from 'readline-sync';

function randNum(max) {
    return Math.floor(Math.random() * max);
  }
 
  function game() {
  const arr = [];
  const num = 1 + randNum(8);
  const step = 3;
  const lenght = 10;
   const makeArr = () => {
for(let minNum = 0; minNum <= lenght; minNum += 1) {
  arr.push(num);
  num += step;
  return arr;
}
}
   }
  function gameProgress(){
    console.log('Welcome to the Brain Games!');
    const userName = readlineSync.question('May I have your name? ');
    console.log('Hi ' + `${userName}` + '!');
    game(userName)
  }
  export default gameProgress
