# 🤖 Testes Automatizados – Cadastro
Projeto: Cypress Real World App (RWA)

---

## 📌 Informações Gerais

- **Aplicação:** Cypress Real World App
- **Feature:** Cadastro de Usuario
- **Tipo de Teste:** Automatizado (E2E)
- **Ferramenta:** Cypress
- **Ambiente:** Local
- **URL:** http://localhost:3000
- **Responsável:** Gabriel

---

## ✅ CT03 – Cadastro de novo usuário com dados válidos

---

### 📝 Descrição
Este caso de teste valida o fluxo completo de cadastro de um novo usuário, garantindo que, ao informar dados válidos nos campos obrigatórios, o sistema crie a conta corretamente, autentique o usuário automaticamente e realize o redirecionamento para a área interna da aplicação.

---

### 🎯 Objetivo
Verificar se o sistema permite o cadastro de um novo usuário quando todas as informações obrigatórias são preenchidas corretamente, garantindo que o usuário seja criado, autenticado e redirecionado para a aplicação com sucesso.

---

### 📋 Pré-condição
- Usuário **não deve estar previamente cadastrado** no sistema.
- Aplicação disponível e acessível.

---

### 🧾 Passos Automatizados
1. Acessar a aplicação.
2. Clicar em **"Cadastre-se"**.
3. Preencher os campos **Nome**, **Sobrenome**, **Nome do Usuário**, **Senha** e **Confirmação de senha** com valores válidos.
4. Clicar em **"Inscreva-se"**.

---

### ✅ Resultado esperado
- Usuário criado com sucesso
- Redirecionamento automático para tela de login após o cadastro
- Usuário autenticado no sistema
- Informações do usuário visíveis na aplicação

---

### 🤖 Status da Automação
✔ Caso de teste automatizado com sucesso utilizando Cypress.

---

## ❌ CT19 – Cadastro de usuário com informações incompletas

---

### 📝 Descrição
Este caso de teste valida o comportamento do sistema ao tentar realizar o cadastro de um novo usuário sem o preenchimento de todas as informações obrigatórias. O objetivo é garantir que o formulário aplique corretamente as validações, impeça o envio dos dados incompletos e apresente mensagens de erro claras ao usuário, assegurando a integridade das informações e uma boa experiência de uso.

---

### 🎯 Objetivo
Validar que o sistema **não permite o registro de um novo usuário** quando as informações obrigatórias não são preenchidas, garantindo a exibição correta das mensagens de erro.

---

### 🔎 Pré-condição
- Aplicação em execução no ambiente local
- Usuário não autenticado
- Página de cadastro acessível

---

### 🧾 Passos Automatizados
1. Acessar a página de **Cadastro de Usuário**
2. Deixar todos os campos obrigatórios em branco:
   - Primeiro Nome
   - Sobrenome
   - Nome de Usuário
   - Senha
   - Confirmação de Senha
3. Clicar no botão **"Inscrever-se"**

---

### ✅ Resultado Esperado
- Registro **não realizado**
- Permanência do usuário na página de cadastro (`/signup`)
- Campos obrigatórios destacados como inválidos
- Exibição de mensagens indicando que os campos são obrigatórios
- Sistema impede o envio do formulário

---

### 🤖 Status da Automação
✔ Caso de teste automatizado com sucesso utilizando Cypress.

---

### 📎 Observações
- Caso de teste automatizado com Cypress
- Os testes automatizados seguem o padrão Page Object.
- Assertions realizadas com base em comportamento da interface e redirecionamento de rota.
- Validação realizada através do atributo `aria-invalid="true"`
- Esses testes fazem parte da suíte de automação do curso **Guardião da Qualidade – LumeStack**.



