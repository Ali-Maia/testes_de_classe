import ServicoDePagamento from "../src/ServicoDePagamento.js";
import assert from 'node:assert';

describe('Testes da classe Serviço de Pagamento', () => {
    it('Validar que o sistema cadastra um pagamento com categoria "padrão" ao informar um valor de 100', () => {
      // Arrenge
      const servicoDePagamento = new ServicoDePagamento;
      
      //Act
      servicoDePagamento.pagar('0987-7656-3475', 'Samar', 100.00);
      const ultimoPagamento = servicoDePagamento.consultarUltimoPagamento();

      //Assert
      assert.equal(ultimoPagamento.codigoBarras, '0987-7656-3475');
      assert.equal(ultimoPagamento.empresa, 'Samar');
      assert.equal(ultimoPagamento.valor, 100.00);
      assert.equal(ultimoPagamento.categoria, 'padrão');

    });
    it('Validar que o sistema cadastra um pagamento com categoria "cara" ao informar um valor maior que 100', () => {
      // Arrenge
      const servicoDePagamento = new ServicoDePagamento;
      
      //Act
      servicoDePagamento.pagar('1234-5678-9012', 'MakeHero', 100.01);
      const ultimoPagamento = servicoDePagamento.consultarUltimoPagamento();

      //Assert
      assert.equal(ultimoPagamento.codigoBarras, '1234-5678-9012');
      assert.equal(ultimoPagamento.empresa, 'MakeHero');
      assert.equal(ultimoPagamento.valor, 100.01);
      assert.equal(ultimoPagamento.categoria, 'cara');

    });
    it('Validar que o sistema retorna erro ao tentar cadastrar um pagamento sem informar o valor', () => {
      // Arrenge
      const servicoDePagamento = new ServicoDePagamento;
      
      //Act & Assert
      assert.throws(() => servicoDePagamento.pagar('1234-5678-9012', 'MakeHero'), {message: 'O valor do pagamento deve ser maior que zero'} );

    });

    it('Validar que o sistema retorna erro ao tentar cadastrar um pagamento com valor menor ou igual a 0', () => {
      // Arrenge
      const servicoDePagamento = new ServicoDePagamento;
      
      //Act & Assert
      assert.throws(() => servicoDePagamento.pagar('1234-5678-9012', 'MakeHero', 0), {message: 'O valor do pagamento deve ser maior que zero'} );

    });

    it('Validar que o sistema retorna erro ao tentar cadastrar um pagamento sem informar um Código de Barras', () => {
      // Arrenge
      const servicoDePagamento = new ServicoDePagamento;
      
      //Act & Assert
      assert.throws(() => servicoDePagamento.pagar('', 'MakeHero', 100), {message: 'Deve ser informado um Código de Barras'} );

    });

      it('Validar que o sistema retorna erro ao tentar cadastrar um pagamento com Código de Barras em formato inválido', () => {
      // Arrenge
      const servicoDePagamento = new ServicoDePagamento;
      
      //Act & Assert
      assert.throws(() => servicoDePagamento.pagar('formatoInválido', 'MakeHero', 100), {message: 'Formato do Código de Barras Inválido'} );

    });

    it('Validar que o sistema retorna erro ao tentar cadastrar um pagamento sem informar uma Empresa', () => {
      // Arrenge
      const servicoDePagamento = new ServicoDePagamento;
      
      //Act & Assert
      assert.throws(() => servicoDePagamento.pagar('1234-5678-9012', '', 100), {message: 'Deve ser informado uma Empresa'} );

    });
});