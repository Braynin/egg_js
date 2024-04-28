function titleFormat(phrase) {
  const FirstLetter = phrase.charAt(0).toUpperCase();
  const RestPhrase = phrase.slice(1, phrase.length - 1).toLowerCase();
  const FinalPhrase = FirstLetter + RestPhrase;
  return FinalPhrase;
}
console.log(titleFormat("hello world"), titleFormat("hello world").length);
console.log(titleFormat("HELLO world"));
console.log(titleFormat("HellO WOrLd"));
