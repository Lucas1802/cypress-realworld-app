import userData from '../fixtures/userdata.json'
import LoginPage from '../pages/loginpage'

const loginPage = new LoginPage ()

describe('Login com sucesso', () => {

  it('Deve fazer login com um usuário válido', () => {
    
    loginPage.accessLoginPage()
    loginPage.loginUser(userData.userSuccess.username, userData.userSuccess.password)
    loginPage.checkUsernameHome(userData.userSuccess.username)
  });
});

describe('Tentar fazer login com credenciais inválidas', () => {
  it('Deve exibir uma mensagem de erro ao fazer login com credenciais inválidas', () => {
    
    loginPage.accessLoginPage()
    loginPage.loginUser(userData.userFail.username, userData.userFail.password)
    loginPage.checkCredentialInvalid()
  });
});