# Trabalho — Serviço de Pagamento (JavaScript)

Implementação simples de um serviço de pagamentos em JavaScript usando classes.

## Resumo

- Classe: `ServicoDePagamento` (em `src/ServicoDePagamento.js`).
- Métodos:
  - `pagar(codigoBarras, empresa, valor)`: registra um pagamento.
  - `consultarUltimoPagamento()`: retorna apenas o último pagamento cadastrado.
- Cada pagamento é um objeto com as propriedades: `codigoBarras`, `empresa`, `valor` e `categoria`.
- Regra de categoria: `valor > 100.00` → `categoria: 'cara'`; caso contrário `categoria: 'padrão'`.

## Exemplo de uso

```javascript
import ServicoDePagamento from './src/ServicoDePagamento.js';

const servico = new ServicoDePagamento();
servico.pagar('0987-7656-3475', 'Samar', 156.87);
console.log(servico.consultarUltimoPagamento());
/* saída esperada:
{
  codigoBarras: '0987-7656-3475',
  empresa: 'Samar',
  valor: 156.87,
  categoria: 'cara'
}
*/
```

## Testes

- Testes em `test/ServicoDePagamento.test.js` usando Mocha e `node:assert`.
- Para executar os testes e gerar o relatório mochawesome:

```bash
npm install
npm test
```

- Relatório HTML: `mochawesome-report/mochawesome.html`

## Observações

- O código valida alguns formatos (ex.: formato do código de barras) e os campos obrigatórios.
- Para dúvidas ou ajustes, altere os arquivos em `src/` e `test/` e rode os testes novamente.

