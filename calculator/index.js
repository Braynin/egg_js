const numero1 = Number(prompt("Agrega el primer numero papi:"));
console.log(numero1);
const numero2 = Number(prompt("Insertame el segundo oniichan:"));
console.log(numero2);
const suma = numero1 + numero2;
const mensajeSuma = "El resultado de la sumirri es: "+suma;
alert(mensajeSuma);
const promedio = suma/2;
const triple = promedio*3;
const ressultadoMenosDiez = triple -10;
const mensajeFinal = "El promedio es: "+promedio+", El triple del promedio es: "+triple+" y si a este triple le restamos 10 obtenemos: "+ressultadoMenosDiez;
alert(mensajeFinal);
const cantidad = Number(prompt("¿Cuantos numeritos wa sumar amo?"));
let sumatoria = 0;
for(let index = 1; index <= cantidad; index++){
    const numeroAsumar = Number(prompt("¿Que numero vamos a sumar?"));
    sumatoria = sumatoria + numeroAsumar;
}
alert("La sumatoria dio como resultado: "+sumatoria+" UwU");