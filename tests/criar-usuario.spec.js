const { test } = require('@playwright/test');
const { PaginaInicial } = require('../pages/PaginaInicial');
const { ModalCadastro } = require('../pages/ModalCadastro');

const senha = '123456';
const usernameBase = 'alefteste1';

function gerarUsernameUnico() {
  return `${usernameBase}_${Date.now()}`;
}

test.describe('Criar usuario no Demoblaze', () => {
  test('deve exibir o modal de cadastro ao clicar em Sign up', async ({ page }) => {
    const paginaInicial = new PaginaInicial(page);
    const modalCadastro = new ModalCadastro(page);

    await paginaInicial.acessar();
    await paginaInicial.abrirModalCadastro();
    await modalCadastro.validarModalVisivel();
  });

  test('deve cadastrar um novo usuario com sucesso', async ({ page }) => {
    const paginaInicial = new PaginaInicial(page);
    const modalCadastro = new ModalCadastro(page);
    const username = gerarUsernameUnico();

    await paginaInicial.acessar();
    await paginaInicial.abrirModalCadastro();
    await modalCadastro.validarModalVisivel();
    await modalCadastro.preencherDados({ username, senha });
    await modalCadastro.confirmarCadastro('Sign up successful.');
  });

  test('deve informar quando o username ja existe', async ({ page }) => {
    const paginaInicial = new PaginaInicial(page);
    const modalCadastro = new ModalCadastro(page);
    const username = gerarUsernameUnico();

    await paginaInicial.acessar();
    await paginaInicial.abrirModalCadastro();
    await modalCadastro.preencherDados({ username, senha });
    await modalCadastro.confirmarCadastro('Sign up successful.');

    await paginaInicial.abrirModalCadastro();
    await modalCadastro.preencherDados({ username, senha });
    await modalCadastro.confirmarCadastro('This user already exist.');
    await modalCadastro.fechar();
  });

  test('deve exigir username e senha no cadastro', async ({ page }) => {
    const paginaInicial = new PaginaInicial(page);
    const modalCadastro = new ModalCadastro(page);

    await paginaInicial.acessar();
    await paginaInicial.abrirModalCadastro();
    await modalCadastro.validarModalVisivel();
    await modalCadastro.preencherDados({ username: usernameBase, senha: '' });
    await modalCadastro.confirmarCadastro('Please fill out Username and Password.');
    await modalCadastro.fechar();
  });
});
