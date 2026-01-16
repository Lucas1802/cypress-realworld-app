# 🤖 Testes Automatizados – Enviar Dinheiro (Transferência)

Projeto: Cypress Real World App (RWA)

---

## 📌 Informações Gerais

- **Aplicação:** Cypress Real World App  
- **Feature:** Enviar Dinheiro (Transferência)  
- **Tipo de Teste:** Automatizado (E2E)  
- **Ferramenta:** Cypress  
- **Ambiente:** Local  
- **URL:** http://localhost:3000  
- **Responsável:** Gabriel  

---

## ✅ CT01 – Enviar dinheiro com saldo suficiente

---

### 📝 Descrição  
Validar que um usuário autenticado consegue realizar uma transferência de dinheiro com sucesso quando possui saldo suficiente em sua conta.

---

### 🎯 Objetivo  
Garantir que o sistema permita a realização de transferências financeiras quando o usuário possui saldo disponível, exibindo a confirmação da transação realizada com sucesso.

---

### 🔎 Pré-condição  

- Usuário cadastrado no sistema  
- Usuário autenticado com sucesso  
- Usuário deve possuir saldo suficiente em conta  
- Sistema disponível e acessível  

---

### 🧾 Passos Automatizados  

1. Acessar a aplicação Cypress Real World App  
2. Realizar login com usuário e senha válidos  
3. Acessar a funcionalidade **New Transaction**  
4. Selecionar um contato da lista de usuários  
5. Informar um valor de transferência dentro do saldo disponível  
6. Informar uma descrição para a transação  
7. Confirmar a transação  

---

### ✅ Resultado Esperado  

- A transação deve ser realizada com sucesso  
- O sistema deve exibir uma mensagem de confirmação da transação  
- O usuário deve ser redirecionado para a tela de transações  

---

### 🤖 Status da Automação  

✔ Caso de teste automatizado com sucesso utilizando Cypress.

---