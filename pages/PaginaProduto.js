const { expect } = require('@playwright/test');

class PaginaProduto {
  constructor(page) {
    this.page = page;
    this.botaoAdicionarAoCarrinho = page.getByRole('link', { name: 'Add to cart' });
  }

  tituloProduto(nomeProduto) {
    return this.page.getByRole('heading', { name: nomeProduto });
  }

  async validarProdutoAberto(nomeProduto) {
    await expect(this.tituloProduto(nomeProduto)).toBeVisible();
  }

  async adicionarAoCarrinho() {
    this.page.once('dialog', async (dialog) => {
      expect(dialog.message()).toBe('Product added');
      await dialog.accept();
    });

    await this.botaoAdicionarAoCarrinho.click();
  }
}

module.exports = { PaginaProduto };
