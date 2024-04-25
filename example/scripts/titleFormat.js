function titleFormat(params) {
  const FirstLetter = params.charAt(0).toUpperCase();
  const RestPhrase = params.slice("").toLowerCase();
  const FinalPhrase = FirstLetter + RestPhrase;
  return FinalPhrase.length;
  console.log(FinalPhrase);
}
titleFormat("hOla MunDo");
titleFormat("hOlA MuNDO");
titleFormat("HOla munDo");
