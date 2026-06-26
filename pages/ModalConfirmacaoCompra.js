const { expect } = require('@playwright/test');

class ModalConfirmacaoCompra {
  constructor(page) {
    this.mensagemSucesso = page.getByRole('heading', { name: 'Thank you for your purchase!' });
    this.modal = page.locator('.sweet-alert');
    this.botaoOk = page.getByRole('button', { name: 'OK' });
  }

  async validarCompraConcluida(nomeCliente) {
    await expect(this.mensagemSucesso).toBeVisible();
    await expect(this.modal).toContainText(nomeCliente);
  }

  async fechar() {
    await this.botaoOk.click();
  }
}

module.exports = { ModalConfirmacaoCompra };
