/*
*
* O PWA reseta o banco toda vez que inciado, portanto ele só funciona com
* usuários já seedados do próprio PWA, caso queira 
* 
* 
*/

import SendMoneyPage from '../pages/sendmoneypage'
import LoginPage from '../pages/loginpage'
import userData from '../fixtures/userdata.json'

const loginpage = new LoginPage ()
const sendmoneypage = new SendMoneyPage ()

describe('Enviar dinheiro com saldo suficiente', () => {
  it('Deve enviar dinheiro com sucesso', () => {
    loginpage.accessLoginPage()
    loginpage.loginUser(userData.userSuccess.username, userData.userSuccess.password)
    loginpage.checkUsernameHome(userData.userSuccess.username)
    sendmoneypage.accessNewTransaction()
    sendmoneypage.newTransaction('10','teste sucesso')
  });
});


describe('Enviar dinheiro com saldo insuficiente', () => {
  it.skip('Deve exibir mensagem de erro ao enviar dinheiro sem saldo suficiente', () => {
      // BUG: O sistema permite realizar transferências mesmo com saldo insuficiente
      // Ver bug-report-envio-saldo-insuficiente.md
      loginpage.accessLoginPage()
      loginpage.loginUser(userData.userSuccess.username, userData.userSuccess.password)
      loginpage.checkUsernameHome(userData.userSuccess.username)
      sendmoneypage.accessNewTransaction()
      sendmoneypage.newTransaction('10000','teste insuficiente')

      // ASSERT ESPERADO PELO REQUISITO
      cy.get('[role="alert"]').should('contain.text', 'Insufficient')
  });
});