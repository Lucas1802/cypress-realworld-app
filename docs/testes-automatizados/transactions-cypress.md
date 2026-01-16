# 🤖 Testes Automatizados – Histórico de Transações

Projeto: Cypress Real World App (RWA)

---

## 📌 Informações Gerais

- **Aplicação:** Cypress Real World App  
- **Feature:** Visualizar Histórico de Transações  
- **Tipo de Teste:** Automatizado (E2E)  
- **Ferramenta:** Cypress  
- **Ambiente:** Local  
- **URL:** http://localhost:3000  
- **Responsável:** Gabriel  

---

## ✅ CT01 – Visualizar histórico com sucesso

---

### 📝 Descrição  
Validar que um usuário autenticado consegue visualizar corretamente o histórico de transações quando existem transações previamente registradas em sua conta.

---

### 🎯 Objetivo  
Garantir que o sistema exiba a lista de transações realizadas pelo usuário, assegurando a correta apresentação do histórico financeiro.

---

### 🔎 Pré-condição  

- Usuário cadastrado no sistema  
- Usuário autenticado com sucesso  
- Usuário deve possuir ao menos uma transação registrada  
- Sistema disponível e acessível  

---

### 🧾 Passos Automatizados  

1. Acessar a aplicação Cypress Real World App  
2. Realizar login com usuário e senha válidos  
3. Criar uma nova transação para garantir a existência de histórico  
4. Navegar até a seção de histórico de transações (aba **Personal**)  
5. Validar a exibição da lista de transações  

---

### ✅ Resultado Esperado  

- O sistema deve exibir corretamente o histórico de transações do usuário  
- A lista de transações deve estar visível na tela  
- A navegação deve ocorrer sem apresentar erros  

---

### 🤖 Status da Automação  

✔ Caso de teste automatizado com sucesso utilizando Cypress.

---

## ❌ CT02 – Visualizar histórico sem transações anteriores

---

### 📝 Descrição  
Validar o comportamento do sistema ao tentar visualizar o histórico de transações de um usuário que não possui transações registradas.

---

### 🎯 Objetivo  
Garantir que o sistema exiba uma mensagem informativa indicando que o usuário não possui transações anteriores, evitando a apresentação de dados inexistentes.

---

### 🔎 Pré-condição  

- Usuário cadastrado no sistema  
- Usuário autenticado com sucesso  
- Usuário **não deve possuir transações registradas**  
- Sistema disponível e acessível  

---

### 🧾 Passos Automatizados  

1. Acessar a aplicação Cypress Real World App  
2. Realizar login com usuário e senha válidos  
3. Navegar até a seção de histórico de transações (aba **Contacts**)  
4. Verificar a exibição da mensagem informando ausência de transações  

---

### ✅ Resultado Esperado  

- O sistema deve exibir uma mensagem indicando que não existem transações anteriores  
- Nenhuma lista de transações deve ser apresentada  
- A navegação deve ocorrer sem erros  

---

### 🤖 Status da Automação  

✔ Caso de teste automatizado com sucesso utilizando Cypress.
