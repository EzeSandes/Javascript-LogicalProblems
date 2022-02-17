const isPalindrome = (str1, str2) => {
  const stringInverted = str1.toLowerCase().split('').reverse().join('');
  const string2 = str2.toLowerCase();

  return stringInverted === string2;
};

console.log(isPalindrome('Ana', 'anana'));
