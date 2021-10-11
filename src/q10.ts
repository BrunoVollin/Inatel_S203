class GerenciaConta {
    private _saldo: number;
  
    constructor() {
      this._saldo = 0;
    }
  
    public getSaldo() {
      if (this._saldo > 0) {
        return parseInt(`${this._saldo}`);
      }
    }
  
    public setSaldo(value: number) {
      if (value < 0) {
        throw new Error('SALDO INVALIDO');
      }
      this._saldo = value;
    }
  }
  
  const conta = new GerenciaConta();
  
  conta.setSaldo(10.888888);
  console.log(conta.getSaldo()); //10
  
  console.log('\x1b[41m\x1b[38m%s\x1b[0m', "****    ERRO QUE EU CRIEI ABAIXO  ****");  
  conta.setSaldo(-2); // ERRO
  