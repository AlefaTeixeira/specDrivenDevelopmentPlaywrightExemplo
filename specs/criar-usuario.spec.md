
# Spec: Criar usuário no Demoblaze

## Contexto

Queremos validar que uma pessoa consegue criar uma nova conta no site Demoblaze usando o formulário de cadastro.

## Objetivo

Garantir que o site permite cadastrar um novo usuário com username e senha válidos.

## Fora de escopo

- Validar login após cadastro.
- Validar recuperação de senha.
- Validar regras fortes de senha.
- Validar cadastro com e-mail real.
- Validar persistência do usuário em longo prazo.

## Comportamento esperado

A pessoa acessa a página inicial do Demoblaze, abre o modal de cadastro, informa um nome de usuário e senha, confirma o cadastro e recebe uma mensagem de sucesso.

## Regras de negócio

- O cadastro deve ser iniciado pelo link `Sign up`.
- O usuário deve informar username e senha.
- O username usado no teste deve ser único para evitar conflito com cadastros anteriores.
- Após clicar em `Sign up`, o site deve exibir uma mensagem confirmando o cadastro.

## Critérios de aceite com casos de teste

- Dado que a pessoa está na página inicial
  Quando ela clica em `Sign up`
  Então o modal de cadastro deve ser exibido.

- Dado que o modal de cadastro está aberto
  Quando ela informa um username único e uma senha válida
  E confirma o cadastro
  Então o site deve exibir a mensagem `Sign up successful.`

 Dado que o modal de cadastro está aberto
  Quando ela informa um username já existente e uma senha válida
  E confirma o cadastro
  Então o site deve exibir a mensagem `This user already exist.`

Dado que o modal de cadastro está aberto
  Quando ela informa apenas um dos dados, sem passar senha ou username
  E confirma o cadastro
  Então o site deve exibir a mensagem `Please fill out Username and Password.`

## Massa de dados

| Cenário | Username | Senha | Observação |
| --- | --- | --- | --- |
| Cadastro com sucesso | Gerado dinamicamente (ex: `alefteste_<timestamp>`) | 123456 | Garante unicidade a cada execução do teste. |
| Username já existente | alefteste1 | 123456 | Usuário fixo, previamente cadastrado na massa de testes (precondição). |
| Campos obrigatórios não preenchidos | (vazio) | 123456 | Testa a validação de campos obrigatórios sem enviar dados. |

## Estados e erros

- Estado inicial: página inicial carregada.
- Estado intermediário: modal de cadastro aberto.
- Estado final: alerta de cadastro realizado com sucesso.
- Erro recuperável: username já existente.
- Erro recuperável: username ou senha sem preenchimento.
- Erro bloqueante: site demo indisponível.



