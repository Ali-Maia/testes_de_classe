import ServicoDePagamento from "../src/ServicoDePagamento.js";
import assert from 'node:assert';

describe('Testes da classe Serviço de Pagamento', () => {
    it('Validar que o sistema cadastra um usuário com categoria "padrão" ao informar um valor de 100', () => {
      // Arrenge
      const servicoDePagamento = new ServicoDePagamento;
      
      //Act
      servicoDePagamento.realizarPagamento('Julio', 'Alícia', 100.00);
      const ultimoPagamento = servicoDePagamento.consultarUltimoPagamento();

      //Assert
      assert.equal(ultimoPagamento.pagador, 'Julio');
      assert.equal(ultimoPagamento.beneficiario, 'Alícia');
      assert.equal(ultimoPagamento.valorPagamento, 100.00);
      assert.equal(ultimoPagamento.categoria, 'padrão');

    });
    it('Validar que o sistema cadastra um usuário com categoria "cara" ao informar um valor maior que 100', () => {
      // Arrenge
      const servicoDePagamento = new ServicoDePagamento;
      
      //Act
      servicoDePagamento.realizarPagamento('Maria', 'Rodrigo', 100.01);
      const ultimoPagamento = servicoDePagamento.consultarUltimoPagamento();

      //Assert
      assert.equal(ultimoPagamento.pagador, 'Maria');
      assert.equal(ultimoPagamento.beneficiario, 'Rodrigo');
      assert.equal(ultimoPagamento.valorPagamento, 100.01);
      assert.equal(ultimoPagamento.categoria, 'cara');

    });
    it('Validar que o sistema retorna erro ao tentar cadastrar um pagamento sem informar o valor', () => {
      // Arrenge
      const servicoDePagamento = new ServicoDePagamento;
      
      //Act & Assert
      assert.throws(() => servicoDePagamento.realizarPagamento('Maria', 'Rodrigo'), {message: 'O valor do pagamento deve ser maior que zero'} );

    });

    it('Validar que o sistema retorna erro ao tentar cadastrar um pagamento com valor menor ou igual a 0', () => {
      // Arrenge
      const servicoDePagamento = new ServicoDePagamento;
      
      //Act & Assert
      assert.throws(() => servicoDePagamento.realizarPagamento('Maria', 'Rodrigo', 0), {message: 'O valor do pagamento deve ser maior que zero'} );

    });

    it('Validar que o sistema retorna erro ao tentar cadastrar um pagamento sem informar o pagador', () => {
      // Arrenge
      const servicoDePagamento = new ServicoDePagamento;
      
      //Act & Assert
      assert.throws(() => servicoDePagamento.realizarPagamento('', 'Rodrigo', 100), {message: 'Deve ser informado um pagador'} );

    });

    it('Validar que o sistema retorna erro ao tentar cadastrar um pagamento sem informar o beneficiário', () => {
      // Arrenge
      const servicoDePagamento = new ServicoDePagamento;
      
      //Act & Assert
      assert.throws(() => servicoDePagamento.realizarPagamento('Maria', '', 100), {message: 'Deve ser informado um beneficiário'} );

    });
});