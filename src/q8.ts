class Contrato {
    status: string = "Ativo";
  
    constructor(status: string) {
      this.status = status;
    }
  }
  
  class ControleContrato {
    private _contrato!: Contrato;
  
    getContrato() {
      this._contrato.status = "Interrompido";
      return this._contrato;
    }
  
    setContrato(contrato: Contrato) {
      if (contrato.status == "Ativo") {
        this._contrato = contrato;
      } else {
        console.log("Contrato Rejeitado");
      }
    }
  }
  
  const c1 = new Contrato("Ativo");
  const c2 = new ControleContrato();
  c2.setContrato(c1);
  console.log(c2.getContrato()?.status);
  
  
  