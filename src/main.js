export default class App {
  sumatoriaSerieUno(numero) {
    let suma = 0;
    for (let i = 1; i <= numero; i++) {
      suma = suma + 1 / i;
    }
    return suma;
  }

  sumatoriaSerieDos(numero) {
    let suma = 0;
    let i = 1;
    while (i <= numero) {
      if (i != 1 && i % 2 != 0) {
        suma = suma - 1 / i;
      } else if (i % 2 === 0 || i == 1) {
        suma = suma + 1 / i;
      }
      i++;
    }
    return suma;
  }

  esPrimo(numero) {
    let resultado = 0;
    let i = 1;
    do {
      if ((numero = 1 && numero % 2 !== 0)) {
        resultado = true;
      } else if (numero % 2 == 0) {
        resultado = false;
      }
      i++;
    } while (i <= numero);
    return resultado;
  }

  obtenerMultiplos(inicio, fin) {
    let i = inicio;
    let resultado = "";
    let multiplos = [];
    do {
      for (i; i <= fin; i++) {
        if (i % 3 == 0 || i == 1) {
          multiplos.push(i);
          resultado = resultado + i;
        }
      }
    } while (i <= fin);
    return resultado;
  }

  obtenerImpares(numero1, numero2) {
    let i = 0;
    let mayor;
    let impares = [];
    let string = "";
    do {
      if (numero1 <= numero2) {
        i = numero1;
        mayor = numero2;
      } else if (numero2 <= numero1) {
        i = numero2;
        mayor = numero1;
      }
      for (i; i <= mayor; i++) {
        if (i % 2 !== 0 || i == 1) {
          impares.push(i);
        }
      }
      impares.sort((a, b) => b - a);
      string = string + impares;
    } while (i <= mayor);
    return string;
  }
}

let app = new App();
console.log("Sumatoria serie uno:");
console.log(app.sumatoriaSerieUno(2));

console.log("Sumatoria serie dos:");
console.log(app.sumatoriaSerieDos(2));
console.log(app.sumatoriaSerieDos(3));
console.log(app.sumatoriaSerieDos(7));

console.log("Es primo:");
console.log(app.esPrimo(3));
console.log(app.esPrimo(101));
console.log(app.esPrimo(190));

console.log("Los multiplos de 3 son:");
console.log(app.obtenerMultiplos(10, 25));

console.log("Los impares son:");
console.log(app.obtenerImpares(5, 30));
console.log(app.obtenerImpares(30, 5));
console.log(app.obtenerImpares(30, 5));
console.log(app.obtenerImpares(5, 10));
console.log(app.obtenerImpares(10, 5));
