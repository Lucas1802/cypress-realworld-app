import SendMoneyPage from '../pages/sendmoneypage'
import LoginPage from '../pages/loginpage'
import TransactionsPage from '../pages/transactionspage'
import userData from '../fixtures/userdata.json'

const loginpage = new LoginPage ()
const sendmoneypage = new SendMoneyPage ()
const transactionspage = new TransactionsPage ()

describe('Visualizar histórico de transações com sucesso', () => {
  it('Deve exibir o histórico de transações de um usuário corretamente', () => {
    loginpage.accessLoginPage()
    loginpage.loginUser(userData.userSuccess.username, userData.userSuccess.password)
    loginpage.checkUsernameHome(userData.userSuccess.username)
    sendmoneypage.accessNewTransaction()
    sendmoneypage.newTransaction('100','teste1')
    transactionspage.accessMyStatement()
  });
});


describe('Tentar visualizar o histórico de transações sem transações anteriores', () => {
  it('Deve exibir uma mensagem indicando que o usuário não possui transações anteriores', () => {
    loginpage.accessLoginPage()
    loginpage.loginUser(userData.userSuccess.username, userData.userSuccess.password)
    loginpage.checkUsernameHome(userData.userSuccess.username)
    transactionspage.accessMyStatementContacts()
  });
});