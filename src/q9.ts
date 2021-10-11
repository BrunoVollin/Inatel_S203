abstract class Quadrilatero {
  abstract calcularArea(): number;
  abstract calcularPerimetro(): number;
}

class Retangulo extends Quadrilatero {
  lado: number;
  altura: number;

  constructor(lado: number, altura: number) {
    super();
    this.altura = altura;
    this.lado = lado;
  }

  calcularArea(): number {
    return this.altura * this.lado;
  }
  calcularPerimetro(): number {
    return 2 * this.altura + 2 * this.lado;
  }
}

class Circulo extends Quadrilatero {
  raio: number;

  constructor(raio: number) {
    super();
    this.raio = raio;
  }

  calcularArea(): number {
    return Math.PI * Math.pow(this.raio, 2);
  }
  calcularPerimetro(): number {
    return 2 * Math.PI * this.raio;
  }
}

class Quadrado extends Retangulo {
  lado: number;

  constructor(lado: number) {
    super(lado, lado);
    this.lado = lado;
  }

  calcularArea(): number {
    return this.lado * this.lado;
  }
  calcularPerimetro(): number {
    return 4 * this.lado;
  }
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

var items: Quadrilatero[] = [
  new Circulo(getRandomArbitrary(0, 10)),
  new Retangulo(getRandomArbitrary(0, 10), getRandomArbitrary(0, 10)),
  new Quadrado(getRandomArbitrary(0, 10)),
];

console.log(items);

items.forEach(element => {
    console.log(element.calcularArea());
    console.log(element.calcularPerimetro());
});