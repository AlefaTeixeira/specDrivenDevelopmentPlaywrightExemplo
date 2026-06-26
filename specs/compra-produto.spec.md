# Spec: Compra simples de um produto no Demoblaze

## Status

Implementada

## Contexto

Queremos demonstrar SDD na pratica usando Playwright com JavaScript. O site escolhido e o Demoblaze, uma loja demo publica usada para estudos de automacao.

## Objetivo

Validar que uma pessoa consegue comprar um produto simples no site Demoblaze, passando por escolha do produto, carrinho, preenchimento dos dados de compra e confirmacao final.

## Fora de escopo

- Validar login.
- Validar cadastro de usuario.
- Validar pagamento real.
- Validar persistencia de pedido.
- Testar todos os produtos, categorias ou navegadores.

## Comportamento esperado

A pessoa acessa a pagina inicial do Demoblaze, escolhe o produto "Samsung galaxy s6", adiciona o produto ao carrinho, abre o carrinho, inicia o pedido, preenche os dados obrigatorios e finaliza a compra. Ao final, o site deve exibir a mensagem de sucesso "Thank you for your purchase!".

## Regras de negocio

- A compra deve iniciar pela pagina inicial.
- O produto usado no exemplo deve ser "Samsung galaxy s6".
- O produto deve aparecer no carrinho antes da finalizacao.
- Os dados obrigatorios do formulario de pedido devem ser preenchidos.
- A confirmacao final deve ser exibida apos clicar em "Purchase".

## Criterios de aceite

- Dado que a pessoa esta na pagina inicial, quando ela abre o produto "Samsung galaxy s6", entao a pagina de detalhes do produto deve exibir esse nome.
- Dado que a pessoa esta na pagina do produto, quando ela adiciona o produto ao carrinho, entao o site deve confirmar que o produto foi adicionado.
- Dado que o produto foi adicionado, quando a pessoa abre o carrinho, entao o produto "Samsung galaxy s6" deve aparecer na lista do carrinho.
- Dado que o produto esta no carrinho, quando a pessoa preenche os dados do pedido e confirma a compra, entao o site deve exibir a mensagem "Thank you for your purchase!".

## Massa de dados

| Campo | Valor |
| --- | --- |
| Produto | Samsung galaxy s6 |
| Nome | Cliente SDD |
| Pais | Brasil |
| Cidade | Sao Paulo |
| Cartao | 4111111111111111 |
| Mes | 12 |
| Ano | 2030 |

## Estados e erros

- Estado inicial: pagina inicial carregada com lista de produtos.
- Estado intermediario: produto visivel no carrinho.
- Estado final: modal de confirmacao da compra.
- Erro recuperavel: alerta de produto adicionado pode demorar alguns segundos.
- Erro bloqueante: site demo indisponivel ou instavel.

## Plano tecnico

### Arquivos afetados

- `tests/compra-produto.spec.js`: teste end-to-end baseado nos criterios de aceite.
- `pages/PaginaInicial.js`: pagina inicial e abertura de produto.
- `pages/PaginaProduto.js`: detalhe do produto e adicao ao carrinho.
- `pages/PaginaCarrinho.js`: carrinho e inicio do pedido.
- `pages/ModalPedido.js`: formulario de compra.
- `pages/ModalConfirmacaoCompra.js`: confirmacao final da compra.
- `playwright.config.js`: configuracao do Playwright usando Demoblaze como `baseURL`.
- `docs/como-explicar-sdd.md`: roteiro para explicar o exemplo.

### Dados e contratos

- Entrada: cliques na interface e preenchimento de formulario.
- Saida: produto no carrinho e mensagem de compra concluida.
- Persistencia: controlada pelo site demo, sem dependencia no projeto.
- Integracoes: site publico `https://www.demoblaze.com`.

## Plano de testes

- Teste end-to-end: fluxo feliz de compra simples.
- Validacoes principais: detalhe do produto, alerta de adicao, produto no carrinho e confirmacao final.
- Execucao local: `npm test`.
- Execucao visual: `npm run test:headed` ou `npm run test:ui`.

## Riscos

- Risco: o site demo pode ficar lento ou indisponivel.
- Mitigacao: usar esperas orientadas a elementos, nao tempos fixos longos.
- Risco: texto ou estrutura do site pode mudar.
- Mitigacao: manter a spec como fonte da intencao e ajustar seletores quando necessario.

## Checklist de implementacao

- [x] Spec escrita em portugues.
- [x] Criterios de aceite definidos.
- [x] Teste Playwright escrito em JavaScript.
- [x] Page Objects criados para cada tela ou modal.
- [x] Nomes dos testes em portugues.
- [x] Documentacao de explicacao criada.
- [x] Teste executado localmente.
