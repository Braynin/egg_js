function Maths(x) {
  const num1 = 12,
    num2 = 21,
    num3 = -2,
    num4 = 1.5;
  let numAbs = Math.abs(x);
  console.log(`El valor absoluto de ${x} es: ${numAbs}`);
  let numFloor = Math.floor(x);
  console.log(`El valor de ${x} redondeado hacia abajo es: ${numFloor}`);
  let numCeil = Math.ceil(x);
  console.log(`El valor de ${x} redondeado hacia arriba es: ${numCeil}`);
  let numRound = Math.round(num4);
  console.log(`El valor de ${num4} redondeado es: ${numRound}`);
  let numMax = Math.max(x, num1, num2, num3, num4);
  console.log(
    `El valor maximo entre ${x}, ${num1}, ${num2}, ${num3} y ${num4} es: ${numMax}`
  );
  let numMin = Math.min(x, num1, num2, num3, num4);
  console.log(
    `El valor minimo entre ${x}, ${num1}, ${num2}, ${num3} y ${num4} es: ${numMin}`
  );
  let numRandom = Math.random();
  console.log(`El valor aleatorio es: ${numRandom}`);
}

Maths(-5.8);
