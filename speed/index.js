// function calcularVelocidad(distancia, tiempo) {
//   const velocidad = distancia / tiempo;
//   console.log(`La velocidad es: ${velocidad} km/h`);
// }
// calcularVelocidad(100, 60);
// calcularVelocidad(500, 10);
// calcularVelocidad(500, 0.5);
const calcularVelocidad = (distancia, tiempo) => {
  const velocidad = distancia * tiempo;
  console.log("La velocidad es: " + velocidad + " km/h");
  return velocidad;
};
const velocidad1 = calcularVelocidad(100, 60);
console.log("La velocidad del primer vehiculo es: " + velocidad1 + " km/h");
