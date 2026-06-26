const { expect } = require('@playwright/test');

class ModalCadastro {
  constructor(page) {
    this.page = page;
    this.modal = page.getByRole('dialog', { name: 'Sign up' });
    this.campoUsername = this.modal.getByLabel('Username:');
    this.campoSenha = this.modal.getByLabel('Password:');
    this.botaoCadastrar = this.modal.getByRole('button', { name: 'Sign up' });
    this.botaoFechar = this.modal
      .getByRole('button', { name: 'Close' })
      .filter({ hasText: 'Close' });
  }

  async validarModalVisivel() {
    await expect(this.modal).toBeVisible();
    await expect(this.modal.getByRole('heading', { name: 'Sign up' })).toBeVisible();
    await expect(this.campoUsername).toBeVisible();
    await expect(this.campoSenha).toBeVisible();
  }

  async preencherDados({ username = '', senha = '' }) {
    await this.campoUsername.fill(username);
    await this.campoSenha.fill(senha);
  }

  async confirmarCadastro(mensagemEsperada) {
    this.page.once('dialog', async (dialog) => {
      expect(dialog.message()).toBe(mensagemEsperada);
      await dialog.accept();
    });

    await this.botaoCadastrar.click();
  }

  async fechar() {
    if (await this.modal.isVisible()) {
      await this.botaoFechar.click();
      await expect(this.modal).toBeHidden();
    }
  }
}

module.exports = { ModalCadastro };
