# Playwright SDD Exemplo

Projeto didático em JavaScript com Playwright usando SDD para automatizar fluxos no site [Demoblaze](https://www.demoblaze.com/).

## Objetivo

Mostrar, na prática, como sair de uma especificação para um teste automatizado em Playwright.

## Estrutura

```text
.
├── docs/
│   └── como-explicar-sdd.md
├── pages/
│   ├── ModalCadastro.js
│   ├── ModalConfirmacaoCompra.js
│   ├── ModalPedido.js
│   ├── PaginaCarrinho.js
│   ├── PaginaInicial.js
│   └── PaginaProduto.js
├── specs/
│   ├── compra-produto.spec.md
│   └── criar-usuario.spec.md
├── tests/
│   ├── compra-produto.spec.js
│   └── criar-usuario.spec.js
├── playwright.config.js
├── package.json
└── .gitignore
```

A spec descreve o comportamento. O teste orquestra o fluxo. Os Page Objects encapsulam seletores e ações de cada tela ou modal.

## Fluxos cobertos

- **Criar usuário**: Cadastro com sucesso, usuário já existente e campos obrigatórios não preenchidos.
- **Compra de produto**: Seleção de produto, adição ao carrinho, preenchimento do pedido e confirmação da compra.

## Como rodar

Instale as dependências:

```bash
npm install
```

Instale o navegador usado pelo Playwright, no exemplo foi usado apenas o Chrome:

```bash
npx playwright install chromium
```

Rode os testes:

```bash
npm test
```

Rode com navegador visível:

```bash
npm run test:headed
```

Abra o modo interativo:

```bash
npm run test:ui
```

## Como explicar o SDD usando este projeto

1. Comece pela spec: `specs/criar-usuario.spec.md` ou `specs/compra-produto.spec.md`.
2. Mostre os critérios de aceite.
3. Abra o teste correspondente em `tests/`.
4. Mostre que cada chamada de Page Object segue a mesma história da spec.
5. Abra um arquivo em `pages/` para mostrar onde ficam seletores e ações da interface.
6. Rode o teste e mostre o resultado.

Roteiro detalhado: `docs/como-explicar-sdd.md`.

## Como conectar ao GitHub

Se o repositório local ainda não existir:

```bash
git init
git add .
git commit -m "Initial Playwright SDD example"
git branch -M main
git remote add origin https://github.com/AlefaTeixeira/specDrivenDevelopmentPlaywrightExemplo.git
git push -u origin main
```

Se o repositório local já existir, confira o remoto:

```bash
git remote -v
```