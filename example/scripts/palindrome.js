const palindrome = (text) => {
  const textSplit = text.split("");
  const textReverse = textSplit.reverse();
  const NewText = textReverse.join("");
  if (NewText === text) {
    console.log("La frase es un palíndromo");
  } else {
    console.log("La frase no es un palíndromo");
  }
};
palindrome("racecar");
palindrome("hello");
