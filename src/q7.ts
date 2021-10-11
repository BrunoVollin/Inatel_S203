class Veiculo {
  marca: String;
  modelo: String;

  constructor({ marca, modelo }: { marca: String; modelo?: String }) {
    this.marca = marca;
    this.modelo = modelo;
  }
}

class Automovel extends Veiculo {
  constructor({ marca, modelo }: { marca: String; modelo?: String }) {
    super({ marca: marca, modelo: modelo });
  }
}

class Motocicleta extends Veiculo {
  constructor({ marca, modelo }: { marca: String; modelo?: String }) {
    super({ marca: marca, modelo: modelo });
  }
}

class Triciclo extends Motocicleta {
  constructor({ marca, modelo }: { marca: String; modelo?: String }) {
    super({ marca: marca, modelo: modelo });
  }
}

const carro1 = new Veiculo({ marca: "carro1" });
const carro2 = new Veiculo({ marca: "carro2", modelo: "modelo2" });

const automovel1 = new Automovel({ marca: "automovel1" });
const automovel2 = new Automovel({ marca: "automovel2", modelo: "modelo2" });

const moto1 = new Motocicleta({ marca: "moto1" });
const moto2 = new Motocicleta({ marca: "moto2", modelo: "modelo2" });

const triciclo1 = new Triciclo({ marca: "triciclo1" });
const triciclo2 = new Triciclo({ marca: "triciclo2", modelo: "modelo2" });

console.log(
  carro1,
  "\n",
  carro2,
  "\n\n",
  automovel1,
  "\n",
  automovel2,
  "\n\n",
  moto1,
  "\n",
  moto2,
  "\n\n",
  triciclo1,
  "\n",
  triciclo2,
  "\n"
);
