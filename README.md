# Playwright SDD Exemplo

Projeto didatico em JavaScript com Playwright usando SDD para automatizar uma compra simples no site [Demoblaze](https://www.demoblaze.com/).

## Objetivo

Mostrar, na pratica, como sair de uma especificacao em portugues para um teste automatizado em Playwright.

## Estrutura

```text
.
├── docs/
│   └── como-explicar-sdd.md
├── pages/
│   ├── PaginaInicial.js
│   ├── PaginaProduto.js
│   ├── PaginaCarrinho.js
│   ├── ModalPedido.js
│   └── ModalConfirmacaoCompra.js
├── specs/
│   └── compra-produto.spec.md
├── tests/
│   └── compra-produto.spec.js
├── playwright.config.js
├── package.json
└── .gitignore
```

A spec descreve o comportamento. O teste orquestra o fluxo. Os Page Objects encapsulam seletores e acoes de cada tela ou modal.

## Como rodar

Instale as dependencias:

```bash
npm install
```

Instale o navegador usado pelo Playwright:

```bash
npx playwright install chromium
```

Rode os testes:

```bash
npm test
```

Rode com navegador visivel:

```bash
npm run test:headed
```

Abra o modo interativo:

```bash
npm run test:ui
```

## Como explicar o SDD usando este projeto

1. Comece pela spec: `specs/compra-produto.spec.md`.
2. Mostre os criterios de aceite.
3. Abra o teste: `tests/compra-produto.spec.js`.
4. Mostre que cada chamada de Page Object segue a mesma historia da spec.
5. Abra um arquivo em `pages/` para mostrar onde ficam seletores e acoes da interface.
6. Rode o teste e mostre o resultado.

Roteiro detalhado: `docs/como-explicar-sdd.md`.

## Como conectar ao GitHub

Se o repositorio local ainda nao existir:

```bash
git init
git add .
git commit -m "Initial Playwright SDD example"
git branch -M main
git remote add origin https://github.com/alefteixeirarethink/playwrightSddExemplo.git
git push -u origin main
```

Se o repositorio local ja existir, confira o remoto:

```bash
git remote -v
```

## Observacao

O Demoblaze e um site demo publico. Se ele estiver lento ou indisponivel, o teste pode falhar mesmo que o codigo esteja correto.
