"use strict";

class Trabajo {
  constructor(titulo, hojas) {
    this.hojas = hojas;
    this.titulo = titulo;
  }

  obtenerCantidadDeHojas() {
    return this.hojas;
  }
  
  obtenerTitulo() {
    return this.titulo;
  }
}

class Impresora {

  constructor() {
    this.estaImprimiendo = false;
    this.trabajos = [];
  }

  obtenerTrabajosEnCola() {
    return this.trabajos.length;
  }

  getEstaImprimiendo() {
    return this.estaImprimiendo;
  }

  obtenerTrabajoParaImprimir() {
    if(this.obtenerTrabajosEnCola() > 0) {
      return this.trabajos.shift();
    }
    else {
      null;
    }
  }

  añadirTrabajoALaCola(trabajo) {
    this.trabajos.push(trabajo);
  }

  imprimirTrabajo() {
    const trabajo = this.obtenerTrabajoParaImprimir();
    if(trabajo) {
      this.estaImprimiendo = true;
      setTimeout(() => {
        console.log(trabajo.obtenerTitulo() + ", impreso.");
        this.estaImprimiendo = false;
      }, trabajo.obtenerCantidadDeHojas() * 1000);
    }
  }
}

class SistemaDeImpresion {
  constructor(...impresoras) {
    this.impresoras = [];
    this.colaImpresorasSolicitandoImprimir = [];
    for (let i = 0; i < arguments.length; i++) {
      this.impresoras.push(arguments[i]);
    }
  }

  solicitarImprimirTrabajo(impresora) {
    this.colaImpresorasSolicitandoImprimir.push(impresora);
  }

  hayImpresorasImprimiendo() {
    for (let i = 0; i < this.impresoras.length; i++) {
      const estaImprimiendo = this.impresoras[i].getEstaImprimiendo();
      if(estaImprimiendo) {
        return true;
      }
    }
    return false;
  }

  obtenerSiguienteImpresora() {
    if(this.colaImpresorasSolicitandoImprimir.length > 0) {
      return this.colaImpresorasSolicitandoImprimir.shift();
    }
    else {
      null;
    }
  }
}

// Interfaz
function añadirTrabajoAImpresora(impresora) {
  const titulo = document.getElementById('titulo').value;
  const paginas = document.getElementById('paginas').value;

  if(titulo.length > 0 && paginas > 0) {
    const trabajo = new Trabajo(titulo, paginas)
    impresora.añadirTrabajoALaCola(trabajo);
    sistemaDeImpresion.solicitarImprimirTrabajo(impresora);

    document.getElementById('paginas').value = '';
    document.getElementById('titulo').value = '';
  }
}

var impresora1 = new Impresora();
var impresora2 = new Impresora();
var impresora3 = new Impresora();

var sistemaDeImpresion = new SistemaDeImpresion(impresora1, impresora2, impresora3);

// Observador
setInterval(() => {
  if(!sistemaDeImpresion.hayImpresorasImprimiendo()) {
    let impresora = sistemaDeImpresion.obtenerSiguienteImpresora();
    if(impresora) {
      impresora.imprimirTrabajo();
    }
  }
}, 500);

// Simulación de usuario
for (let i = 0; i < 10; i++) {
  const impresoras = [impresora1, impresora2, impresora3];
  const index = Math.floor(Math.random() * 3);
  const hojas = Math.floor(Math.random() * 3) + 2;
  const titulo = "Trabajo " + i + " en impresora " + (index*1 + 1);

  impresoras[index].añadirTrabajoALaCola(new Trabajo(titulo, hojas));
  sistemaDeImpresion.solicitarImprimirTrabajo(impresoras[index]);
}

console.table({impresora1, impresora2, impresora3});
