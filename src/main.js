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
}

let app = new App();

console.log(app.sumatoriaSerieUno(2));

console.log(app.sumatoriaSerieDos(2));
console.log(app.sumatoriaSerieDos(3));
console.log(app.sumatoriaSerieDos(7));

console.log(app.esPrimo(3));
console.log(app.esPrimo(101));
console.log(app.esPrimo(190));

console.log(app.obtenerMultiplos(10, 25));

/*
console.log(app.obtenerImpares(5, 30));
console.log(app.obtenerImpares(30, 5));
console.log(app.obtenerImpares(30, 5));
console.log(app.obtenerImpares(5, 10));
console.log(app.obtenerImpares(10, 5));

