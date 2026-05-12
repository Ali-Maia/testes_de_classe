export default class ServicoDePagamento{
  #pagamentos;

  constructor(){
    this.#pagamentos= [];
  };

  pagar(codigoDeBarras, empresa, valor){
    let categoria = 'padrão';
    const codigoDeBarrasRegex = /^\d{4}-\d{4}-\d{4}$/;

    if(valor <= 0 || valor == null){
      throw new Error('O valor do pagamento deve ser maior que zero');
    }

    if(codigoDeBarras == '' || codigoDeBarras == null){
      throw new Error('Deve ser informado um Código de Barras');
    }

    if(codigoDeBarrasRegex.test(codigoDeBarras) == false){
      throw new Error('Formato do Código de Barras Inválido');
    }

    if(empresa == '' || empresa == null){
      throw new Error('Deve ser informado uma Empresa');
    }

    if(valor > 100.00){
      categoria = 'cara';
    }

    this.#pagamentos.push({
      codigoBarras: codigoDeBarras, 
      empresa: empresa, 
      valor: valor,
      categoria: categoria
    });
  };

  consultarUltimoPagamento(){
    const ultimoPagamentoRealizado = this.#pagamentos.at(-1);
    return ultimoPagamentoRealizado;
  };
};