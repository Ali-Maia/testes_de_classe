export default class ServicoDePagamento{
  #pagamentos;

  constructor(){
    this.#pagamentos= [];
  };

  realizarPagamento(pagante, beneficiario, valor){
    let categoria = 'padrão';
    if(valor <= 0 || valor == null){
      throw new Error('O valor do pagamento deve ser maior que zero');
    }

    if(pagante == '' || pagante == null){
      throw new Error('Deve ser informado um pagador');
    }

    if(beneficiario == '' || beneficiario == null){
      throw new Error('Deve ser informado um beneficiário');
    }

    if(valor > 100.00){
      categoria = 'cara';
    }

    this.#pagamentos.push({
      pagador: pagante, 
      beneficiario: beneficiario, 
      valorPagamento: valor,
      categoria: categoria
    });
  };

  consultarUltimoPagamento(){
    const ultimoPagamentoRealizado = this.#pagamentos.at(-1);
    return ultimoPagamentoRealizado;
  };
};