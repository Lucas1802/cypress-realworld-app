import { access } from 'fs';
import RegisterPage from '../pages/registerpage'

const registerPage = new RegisterPage ()

describe('Registro de novo usuário com sucesso', () => {

  it('Deve registrar um novo usuário com informações válidas', () => {
    registerPage.accessRegisterPage()
    registerPage.registerUser('Eny', 'Siqueira', 'EnySiqueira', '1234','1234') //O sistema permite realizar cadastro utilizando um nome de usuário já existente.
    registerPage.checkRegisterSucess()
  });
});

describe('Tentar registrar um novo usuário com informações incompletas', () => {

  it.only('Deve exibir mensagens de erro ao tentar registrar um novo usuário sem preencher todas as informações obrigatórias', () => {
      registerPage.accessRegisterPage()
      registerPage.checkRegisterInvalid()
  });
});

// BUG CT15 - Sistema permite username duplicado
it.skip('Não deve permitir cadastro com username existente', () => {
  // aguardando correção
})