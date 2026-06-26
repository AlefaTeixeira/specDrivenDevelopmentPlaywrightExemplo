# Como explicar SDD com este exemplo

SDD significa Spec-Driven Development. A ideia e simples: antes de automatizar ou implementar, o time escreve qual comportamento espera observar.

Neste projeto, a spec guia o teste Playwright. Os Page Objects em `pages/` encapsulam a interacao com cada tela ou modal.

## Como apresentar para outras pessoas

1. Abra `specs/compra-produto.spec.md`.
2. Leia o objetivo e o fora de escopo.
3. Mostre os criterios de aceite.
4. Abra `tests/compra-produto.spec.js`.
5. Mostre que cada chamada de Page Object corresponde a uma parte dos criterios.
6. Abra um arquivo em `pages/` (por exemplo, `PaginaProduto.js`) para mostrar onde ficam seletores e acoes.
7. Rode `npm test`.
8. Explique que o teste prova o comportamento descrito na spec.

## Ligacao entre spec, teste e Page Objects

| Criterio de aceite (spec) | Teste | Page Object |
| --- | --- | --- |
| Abrir produto "Samsung galaxy s6" | `paginaInicial.abrirProduto(produto)` | `PaginaInicial` |
| Detalhe do produto exibe o nome | `paginaProduto.validarProdutoAberto(produto)` | `PaginaProduto` |
| Adicionar ao carrinho | `paginaProduto.adicionarAoCarrinho()` | `PaginaProduto` |
| Ver produto no carrinho | `paginaCarrinho.validarProdutoNoCarrinho(produto)` | `PaginaCarrinho` |
| Preencher dados e confirmar compra | `modalPedido.preencherDados(...)` e `modalPedido.confirmarCompra()` | `ModalPedido` |
| Ver confirmacao da compra | `modalConfirmacaoCompra.validarCompraConcluida(...)` | `ModalConfirmacaoCompra` |

## Por que Page Objects aqui

- O teste fica legivel como a historia da spec, sem seletores espalhados.
- Se o site mudar, ajusta-se o Page Object afetado, nao o fluxo inteiro.
- Cada classe representa uma tela ou modal que a pessoa enxerga na interface.

## O que SDD evita

- Teste automatizado sem objetivo claro.
- Discussao tecnica antes de alinhar comportamento.
- Criterios de aceite que nao podem ser verificados.
- Automacao que testa detalhe interno em vez de valor para usuario.

## Frase boa para ensinar

SDD nao e escrever documento grande. E transformar comportamento esperado em exemplos verificaveis antes de escrever o teste ou o codigo.

## Como evoluir o exemplo

- Criar uma spec para validar carrinho vazio.
- Criar uma spec para remover produto do carrinho.
- Criar uma spec para validar formulario de compra incompleto.
- Reutilizar ou estender os Page Objects existentes quando novos fluxos compartilharem as mesmas telas.
