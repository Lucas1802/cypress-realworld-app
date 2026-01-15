# 🤖 Testes Automatizados – Login
Projeto: Cypress Real World App (RWA)

---

## 📌 Informações Gerais

- **Aplicação:** Cypress Real World App
- **Feature:** Login
- **Tipo de Teste:** Automatizado (E2E)
- **Ferramenta:** Cypress
- **Ambiente:** Local
- **URL:** http://localhost:3000
- **Responsável:** Gabriel

---

## ✅ CT01 – Login com dados válidos

---

### 📝 Descrição
Verificar se o usuário consegue acessar o sistema ao informar credenciais válidas.

---

### 🎯 Objetivo
Garantir que o sistema autentique corretamente um usuário válido e permita o acesso à aplicação.

---

### 🔎 Pré-condição
- Usuário previamente cadastrado no sistema.
- Aplicação disponível e acessível.

---

### 🧾 Passos Automatizados
1. Acessar a página de login.
2. Preencher o campo **Nome do Usuário** com um valor válido.
3. Preencher o campo **Senha** com um valor válido.
4. Clicar no botão **Entrar**.

---

### ✅ Resultado Esperado
- Login realizado com sucesso.
- Redirecionamento para a página inicial (dashboard).
- Informações do usuário visíveis na interface.

---

### 🤖 Status da Automação
✔ Caso de teste automatizado com sucesso utilizando Cypress.

---

## ❌ CT05 – Login com usuário e senha inválidos

### 📝 Descrição
Verificar o comportamento do sistema ao tentar realizar login com credenciais inválidas.

---

### 🎯 Objetivo
Validar que o sistema bloqueia o acesso quando credenciais inválidas são informadas e exibe uma mensagem de erro apropriada.

---

### 🔎 Pré-condição
- Aplicação disponível e acessível.
- Usuário inexistente ou senha incorreta.

---

### 🧾 Passos Automatizados
1. Acessar a página de login.
2. Preencher o campo **Nome do Usuário** com um valor inválido.
3. Preencher o campo **Senha** com um valor inválido.
4. Clicar no botão **Entrar**.

---

### ✅ Resultado Esperado
- Login não realizado.
- Exibição de mensagem de erro informando **credenciais inválidas**.
- Usuário permanece na tela de login.

---

### 🤖 Status da Automação
✔ Caso de teste automatizado com sucesso utilizando Cypress.

---

## 📎 Observações
- Os testes automatizados seguem o padrão Page Object.
- Assertions realizadas com base em comportamento da interface e redirecionamento de rota.
- Esses testes fazem parte da suíte de automação do curso **Guardião da Qualidade – LumeStack**.
