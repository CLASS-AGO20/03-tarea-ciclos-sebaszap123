export default class App {
  sumatoriaSerieUno(numero) {
    let suma = 0;
    for (let i = 1; i <= numero; i++) {
      suma = suma + 1 / i;
    }
    return suma;
  }
}

let app = new App();

console.log(app.sumatoriaSerieUno(2));

/* console.log(app.sumatoriaSerieDos(2));
console.log(app.sumatoriaSerieDos(3));
console.log(app.sumatoriaSerieDos(7)); 