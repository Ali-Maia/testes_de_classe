# Trabalho Classes — Serviço de Pagamento

Projeto simples em JavaScript que simula um serviço de pagamentos usando classes.

## Funcionalidades

- Registrar pagamentos com:
  - `pagador`
  - `beneficiario`
  - `valorPagamento`
  - `categoria` (`padrão` ou `cara`)
- Classificar pagamento como:
  - `padrão` para valores até 100
  - `cara` para valores acima de 100
- Validar erros quando:
  - valor não é informado ou é menor/igual a zero
  - pagador não é informado
  - beneficiário não é informado

## Estrutura

- `src/ServicoDePagamento.js`: classe principal.
- `test/ServicoDePagamento.test.js`: testes automatizados com Mocha.
- `mochawesome-report/`: relatório HTML dos testes.

## Como executar

1. Instale as dependências:

```bash
npm install
```

2. Rode os testes:

```bash
npm test
```

3. Abra o relatório em:

- `mochawesome-report/mochawesome.html`
