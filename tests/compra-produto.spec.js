const { test } = require('@playwright/test');
const { PaginaInicial } = require('../pages/PaginaInicial');
const { PaginaProduto } = require('../pages/PaginaProduto');
const { PaginaCarrinho } = require('../pages/PaginaCarrinho');
const { ModalPedido } = require('../pages/ModalPedido');
const { ModalConfirmacaoCompra } = require('../pages/ModalConfirmacaoCompra');

const produto = 'Samsung galaxy s6';

const dadosDaCompra = {
  nome: 'Cliente SDD',
  pais: 'Brasil',
  cidade: 'Sao Paulo',
  cartao: '4111111111111111',
  mes: '12',
  ano: '2030'
};

test.describe('Compra simples de produto no Demoblaze', () => {
  test('deve comprar um produto com sucesso seguindo a spec SDD', async ({ page }) => {
    const paginaInicial = new PaginaInicial(page);
    const paginaProduto = new PaginaProduto(page);
    const paginaCarrinho = new PaginaCarrinho(page);
    const modalPedido = new ModalPedido(page);
    const modalConfirmacaoCompra = new ModalConfirmacaoCompra(page);

    await paginaInicial.acessar();
    await paginaInicial.validarProdutoVisivel(produto);
    await paginaInicial.abrirProduto(produto);

    await paginaProduto.validarProdutoAberto(produto);
    await paginaProduto.adicionarAoCarrinho();

    await paginaCarrinho.acessar();
    await paginaCarrinho.validarProdutoNoCarrinho(produto);
    await paginaCarrinho.fazerPedido();

    await modalPedido.preencherDados(dadosDaCompra);
    await modalPedido.confirmarCompra();

    await modalConfirmacaoCompra.validarCompraConcluida(dadosDaCompra.nome);
    await modalConfirmacaoCompra.fechar();
  });
});
