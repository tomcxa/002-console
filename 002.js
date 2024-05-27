import readline from 'node:readline/promises'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

//   const answer = Math.random() * 100;
  const answer = 55;

  console.log('Загадано число в диапазоне от 0 до 100');

  rl.on('line', (input) => {
    const inputNumber = Number(input)
    if (Number.isNaN(inputNumber)) {
        console.log(`Ах, проказник! Введи число.`);
    }
    if (inputNumber === answer) {
        console.log(`Отгадано число ${answer} 🥳`);
        rl.close()
    }
    if (inputNumber > answer) {
        console.log('Меньше');
    }
    if (inputNumber < answer) {
        console.log('Больше');
    }
  });