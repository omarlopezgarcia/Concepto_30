// Calcular el área de un cuadrado
function calcularAreaCuadrado(lado) {
    return lado * lado;
  }
  
  // Función para calcular el área de un círculo
  function calcularAreaCirculo(radio) {
    return Math.PI * Math.pow(radio, 2);
  }
  
  // Utilizamos las funciones para calcular áreas
  const ladoCuadrado = 5;
  const radioCirculo = 2;
  
  const areaCuadrado = calcularAreaCuadrado(ladoCuadrado);
  const areaCirculo = calcularAreaCirculo(radioCirculo);
  
  console.log(`El área del cuadrado es: ${areaCuadrado}.`); // Output correcta: "El área del cuadrado es: 25."
  console.log(`El área del círculo es: ${areaCirculo}.`); // Output correcta: "El área del circulo es: 12.566....."
  