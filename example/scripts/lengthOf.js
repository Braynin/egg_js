function lengthOf(params) {
  const length = params.length;
  if (length > 0) {
    alert(
      `La cantidad de caracteres de la frase o palabra ${params} es: ${length}`
    );
    return length;
  } else {
    alert("Invalid Input");
  }
}
const frase = prompt(
  "Ingresa la frase o palabra del cual quiereas saber la cantidad de caracteres, como quieras mano da igual..."
);
lengthOf(frase);
