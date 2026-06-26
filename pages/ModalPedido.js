class ModalPedido {
  constructor(page) {
    this.campoNome = page.locator('#name');
    this.campoPais = page.locator('#country');
    this.campoCidade = page.locator('#city');
    this.campoCartao = page.locator('#card');
    this.campoMes = page.locator('#month');
    this.campoAno = page.locator('#year');
    this.botaoComprar = page.getByRole('button', { name: 'Purchase' });
  }

  async preencherDados(dadosCompra) {
    await this.campoNome.fill(dadosCompra.nome);
    await this.campoPais.fill(dadosCompra.pais);
    await this.campoCidade.fill(dadosCompra.cidade);
    await this.campoCartao.fill(dadosCompra.cartao);
    await this.campoMes.fill(dadosCompra.mes);
    await this.campoAno.fill(dadosCompra.ano);
  }

  async confirmarCompra() {
    await this.botaoComprar.click();
  }
}

module.exports = { ModalPedido };
