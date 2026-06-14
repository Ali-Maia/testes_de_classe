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

## Integração Contínua (CI)

Este projeto utiliza o **GitHub Actions** para automatizar a execução dos testes e garantir a qualidade do código. O arquivo de configuração pode ser encontrado em `.github/workflows/testes-unidade.yaml`.

A pipeline contempla os seguintes processos:
- **Gatilhos (Triggers):** A automação é executada automaticamente a cada envio de código (`push`), de forma manual (`workflow_dispatch`) e através de um agendamento (`schedule`) configurado para rodar a cada 10 minutos.
- **Ambiente:** Os testes rodam em uma máquina virtual `ubuntu-latest` utilizando o Node.js.
- **Relatório de Testes:** O workflow instala as dependências, executa os testes de unidade e gera dinamicamente os resultados via Mochawesome.
- **Armazenamento de Artefato:** O relatório gerado não é versionado no código, mas salvo e publicado como um **Artefato** temporário na própria plataforma do GitHub.

**Como acessar o relatório da pipeline:**
1. Acesse a aba **Actions** aqui no repositório.
2. Na barra lateral, clique no workflow **Testes de Unidade**.
3. Selecione a execução mais recente que tenha finalizado com sucesso.
4. Role a página até a seção **Artifacts** (Artefatos).
5. Clique em **Relatório de testes de unidade** para fazer o download.
6. Extraia o arquivo `.zip` e abra o `mochawesome.html` no seu navegador para visualizar o painel.

## Observações

- O código valida alguns formatos (ex.: formato do código de barras) e os campos obrigatórios.
- Para dúvidas ou ajustes, altere os arquivos em `src/` e `test/` e rode os testes novamente.

