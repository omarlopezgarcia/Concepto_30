// Clase Base Vehiculo
class Vehiculo {
    constructor(nombre) {
      this.nombre = nombre;
    }
  
    // Método común para todos los vehículos
    desplazar() {
      console.log(`El ${this.nombre} se desplaza.`);
    }
  }
  
  // SubClase Carro
  class Carro extends Vehiculo {
    constructor(nombre, velocidadMaxima) {
      super(nombre);
      this.velocidadMaxima = velocidadMaxima;
    }
  
    // Implementación específica para Carro
    desplazar() {
      console.log(`El ${this.nombre} se desplaza a una velocidad máxima de ${this.velocidadMaxima} km/h.`);
    }
  }
  
  // Subclase Bicicleta
  class Bicicleta extends Vehiculo {
    constructor(nombre, tipo) {
      super(nombre);
      this.tipo = tipo;
    }
  
    // Implementación específica para Bicicleta
    desplazar() {
      console.log(`La ${this.nombre} (${this.tipo}) se desplaza pedaleando.`);
    }
  }
  
  // Instancias de Carro y Bicicleta
  const miCarro = new Carro('Carro Deportivo', 200);
  const miBicicleta = new Bicicleta('Bicicleta Roja', 'BMX');
  
  // Llamar al método desplazar en ambas instancias
  miCarro.desplazar();      // Output correcta: "El Carro Deportivo se desplaza a una velocidad máxima de 200 km/h."
  miBicicleta.desplazar();  // Output correcta: "La Bicicleta Roja (BMX) se desplaza pedaleando."
  