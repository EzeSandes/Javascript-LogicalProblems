const multiplyTable = (number = 1) => {
  let result = '';

  for (let i = 0; i < 10; i++)
    result += `${number} x ${i + 1} = ${number * (i + 1)}\n`;

  return result;
};

const result = multiplyTable(5);
console.log(result);
