class calculator {
  constructor(num1, num2) {
    this.num1 = num1;
    this.num2 = num2;
    this.result = 0;
  }

  suma() {
    this.result = this.num1 + this.num2;
    alert(`La suma de ${this.num1} y ${this.num2} es ${this.result}`);
  }
  resta() {
    this.result = this.num1 - this.num2;
    alert(`La resta de ${this.num1} y ${this.num2} es ${this.result}`);
  }
  multiplicacion() {
    this.result = this.num1 * this.num2;
    alert(`La multiplicacion de ${this.num1} y ${this.num2} es ${this.result}`);
  }
  division() {
    this.result = this.num1 / this.num2;
    alert(`La division de ${this.num1} y ${this.num2} es ${this.result}`);
  }
  potencia() {
    this.result = Math.pow(this.num1, this.num2);
    alert(
      `La potencia de ${this.num1} elevado a ${this.num2} es ${this.result}`
    );
  }
}

const num1 = Number(prompt("Ingresa el primer numero"));
const num2 = Number(prompt("Ingresa el segundo numero"));
const operacion = prompt(
  "Ingresa la operacion que deseas realizar (suma, resta, multiplicacion, division, potencia)"
);
const aCalcular = new calculator(num1, num2);
switch (operacion) {
  case "suma":
    aCalcular.suma();
    break;
  case "resta":
    aCalcular.resta();
    break;
  case "multiplicacion":
    aCalcular.multiplicacion();
    break;
  case "division":
    aCalcular.division();
    break;
  case "potencia":
    aCalcular.potencia();
    break;
  default:
    alert("Operacion no valida");
    break;
}
