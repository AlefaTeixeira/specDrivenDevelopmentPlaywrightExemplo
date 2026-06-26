const { expect } = require('@playwright/test');

class PaginaInicial {
  constructor(page) {
    this.page = page;
  }

  linkProduto(nomeProduto) {
    return this.page.getByRole('link', { name: nomeProduto });
  }

  async acessar() {
    await this.page.goto('/');
    await expect(this.page).toHaveTitle(/STORE/);
  }

  async validarProdutoVisivel(nomeProduto) {
    await expect(this.linkProduto(nomeProduto)).toBeVisible();
  }

  async abrirProduto(nomeProduto) {
    await this.linkProduto(nomeProduto).click();
  }

  async abrirModalCadastro() {
    await this.page.getByRole('link', { name: 'Sign up', exact: true }).click();
  }
}

module.exports = { PaginaInicial };
