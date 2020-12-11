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
      if ((i != 1 && i % 2 != 0)) {
        suma = suma - 1 / i;
      } else if (i % 2 === 0 || i == 1) {
        suma = suma + 1 / i;
      }
      i++;
    }
    return suma;
  }
}

let app = new App();

console.log(app.sumatoriaSerieUno(2));

console.log(app.sumatoriaSerieDos(2));
console.log(app.sumatoriaSerieDos(3));
console.log(app.sumatoriaSerieDos(7)); 