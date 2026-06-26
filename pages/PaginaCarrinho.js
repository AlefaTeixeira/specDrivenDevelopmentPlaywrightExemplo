const { expect } = require('@playwright/test');

class PaginaCarrinho {
  constructor(page) {
    this.page = page;
    this.linkCarrinho = page.getByRole('link', { name: 'Cart', exact: true });
    this.listaProdutos = page.locator('#tbodyid');
    this.botaoFazerPedido = page.getByRole('button', { name: 'Place Order' });
  }

  async acessar() {
    await this.linkCarrinho.click();
  }

  async validarProdutoNoCarrinho(nomeProduto) {
    await expect(this.listaProdutos).toContainText(nomeProduto);
  }

  async fazerPedido() {
    await this.botaoFazerPedido.click();
  }
}

module.exports = { PaginaCarrinho };
