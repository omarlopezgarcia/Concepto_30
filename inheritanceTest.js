// Clase Base del Animal
function Animal(nombre) {
  this.nombre = nombre;
}

// Método común a las instancias de Animal
Animal.prototype.saludar = function () {
  console.log(`Hola, soy ${this.nombre}.`);
}

// SubClase Gato
function Gato(nombre, raza) {
  // Llamar al constructor de la clase base Animal y establecer 'nombre'
  Animal.call(this, nombre);
  this.raza = raza;
}

// Herencia de Gato desde Animal
Gato.prototype = Object.create(Animal.prototype);

// Método para Gato
Gato.prototype.maullar = function () {
  console.log('¡Miauuuu!');
}

// Instancias de Animal y Gato
const miAnimal = new Animal('Animalito');
const miGato = new Gato('Laim', 'Siberiano');

// Llamar a métodos de ambas clases
miAnimal.saludar(); // Output correcta: "Hola, soy Animalito."
miGato.saludar(); // Output correcta: "Hola, soy Laim."
miGato.maullar(); // Output correcta: "¡Miauuuu!"
