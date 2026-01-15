# 🤖 Testes Manuais – Cadastro
Projeto: Cypress Real World App (RWA)

---

## 📌 Informações Gerais

- **Aplicação:** Cypress Real World App
- **Feature:** Cadastro de Usuario
- **Tipo de Teste:** Manual 
- **Ambiente:** Local
- **URL:** http://localhost:3000/signup
- **Responsável:** Gabriel

---

## ✅ CT10 – Cadastro sem nome

---

### 📌 Casos de teste
Validar o comportamento do sistema ao tentar realizar o cadastro de um novo usuário sem informar o **nome**, garantindo que as regras de validação sejam aplicadas corretamente.

---

### 🎯 Objetivo
Verificar se o sistema impede o cadastro quando o campo **Nome** não é preenchido, exibindo mensagens de validação apropriadas e bloqueando a submissão do formulário.

---

### 🔐 Pré-condições
- Aplicação disponível e acessível
- Usuário não autenticado
- Usuário na tela de **Cadastro**
- Campos de sobrenome, usuário, senha e confirmação disponíveis para preenchimento

---

### 📝 Passos
1. Acessar a tela de **Cadastro** do sistema
2. Deixar o campo **Nome** em branco
3. Preencher os demais campos obrigatórios com valores válidos
4. Tentar clicar no botão **“Inscrever-se”**

---

### ✅ Resultado esperado
- Cadastro **não realizado** 
- Mensagem de validação exibida para o campo **Nome** 
- Botão **“Inscrever-se”** permanece desabilitado ou não permite submissão 
- Usuário permanece na tela de cadastro 

---

## ✅ CT11 – Cadastro sem nome do usuário

---

### 📌 Casos de teste
Validar o comportamento do sistema ao tentar realizar o cadastro de um novo usuário sem informar o **nome de usuário**, garantindo que as regras de validação sejam corretamente aplicadas.

---

### 🎯 Objetivo
Verificar se o sistema impede o cadastro quando o campo **Nome do Usuário** não é preenchido, exibindo mensagens de validação e bloqueando a submissão do formulário.

---

### 🔐 Pré-condições
- Aplicação disponível e acessível
- Usuário não autenticado
- Usuário na tela de **Cadastro**
- Campos de nome, sobrenome, senha e confirmação disponíveis para preenchimento

---

### 📝 Passos
1. Acessar a tela de **Cadastro** do sistema
2. Preencher os campos **Nome** e **Sobrenome** com valores válidos
3. Deixar o campo **Nome do Usuário** em branco
4. Preencher os campos **Senha** e **Confirmação de Senha** com valores válidos
5. Tentar clicar no botão **“Inscrever-se”**

---

### ✅ Resultado esperado
- Cadastro **não realizado**
- Mensagem de validação exibida para o campo **Nome do Usuário**
- Botão **“Inscrever-se”** permanece desabilitado ou não permite submissão 
- Usuário permanece na tela de cadastro

---

## ✅ CT12 – Cadastro sem sobrenome

---

### 📌 Casos de teste
Validar o comportamento do sistema ao tentar realizar o cadastro de um novo usuário sem informar o **sobrenome**, garantindo que as regras de obrigatoriedade sejam respeitadas.

---

### 🎯 Objetivo
Verificar se o sistema impede o cadastro quando o campo **Sobrenome** não é preenchido, exibindo mensagens de validação apropriadas.

---

### 🔐 Pré-condições
- Aplicação disponível e acessível
- Usuário não autenticado
- Usuário na tela de **Cadastro**
- Campos de nome, nome do usuário, senha e confirmação disponíveis para preenchimento

---

### 📝 Passos
1. Acessar a tela de **Cadastro** do sistema
2. Preencher o campo **Nome** com um valor válido
3. Deixar o campo **Sobrenome** em branco
4. Preencher o campo **Nome do Usuário** com um valor válido
5. Preencher os campos **Senha** e **Confirmação de Senha** com valores válidos
6. Tentar clicar no botão **“Inscrever-se”**

---

### ✅ Resultado esperado
- Cadastro **não realizado** 
- Mensagem de validação exibida para o campo **Sobrenome**
- Usuário permanece na tela de cadastro 

---

## ✅ CT13 – Cadastro sem senha

---

### 📌 Casos de teste
Validar o comportamento do sistema ao tentar realizar o cadastro de um novo usuário **sem informar a senha**, garantindo que as regras de obrigatoriedade sejam aplicadas corretamente.

---

### 🎯 Objetivo
Verificar se o sistema impede o cadastro quando o campo **Senha** não é preenchido, exibindo mensagens de validação e mantendo o botão de submissão desabilitado.

---

### 🔐 Pré-condições
- Aplicação disponível e acessível
- Usuário não autenticado
- Usuário na tela de **Cadastro**
- Campos de nome, sobrenome e nome do usuário disponíveis

---

### 📝 Passos
1. Acessar a tela de **Cadastro** do sistema
2. Preencher o campo **Nome** com um valor válido
3. Preencher o campo **Sobrenome** com um valor válido
4. Preencher o campo **Nome do Usuário** com um valor válido
5. Deixar o campo **Senha** em branco
6. Deixar o campo **Confirmar Senha** em branco
7. Tentar clicar no botão **“Inscrever-se”**

---

### ✅ Resultado esperado
- Cadastro **não realizado** 
- Mensagem de validação exibida para o campo **Senha** 
- Mensagem de validação exibida para o campo **Confirmar Senha** 
- Botão **“Inscrever-se”** permanece desabilitado 
- Usuário permanece na tela de cadastro

---


## ✅ CT14 – Cadastro com senha curta

---

### 📌 Casos de teste
Validar o comportamento do sistema ao tentar realizar o cadastro de um novo usuário utilizando uma **senha abaixo do tamanho mínimo permitido**.

---

### 🎯 Objetivo
Verificar se o sistema valida corretamente o tamanho mínimo da senha, impedindo o cadastro e exibindo mensagem informativa ao usuário.

---

### 🔐 Pré-condições
- Aplicação disponível e acessível
- Usuário não autenticado
- Usuário na tela de **Cadastro**
- Campos de nome, sobrenome, nome do usuário, senha e confirmação de senha disponíveis

---

### 📝 Passos
1. Acessar a tela de **Cadastro** do sistema
2. Preencher o campo **Nome** com um valor válido
3. Preencher o campo **Sobrenome** com um valor válido
4. Preencher o campo **Nome do Usuário** com um valor válido
5. Preencher o campo **Senha** com menos caracteres do que o mínimo permitido
6. Preencher o campo **Confirmar Senha** com a mesma senha curta
7. Tentar clicar no botão **“Inscrever-se”**

---

### ✅ Resultado esperado
- Cadastro **não realizado**
- Mensagem informando a **regra mínima de senha** exibida
- Usuário permanece na tela de cadastro 

---

## ✅ CT17 – Recarregar página durante cadastro

---

### 📌 Casos de teste
Verificar o comportamento do sistema quando o usuário recarrega a página durante o preenchimento do formulário de cadastro.

---

### 🎯 Objetivo
Validar se a aplicação lida corretamente com o recarregamento da página durante o processo de cadastro, garantindo estabilidade e evitando erros inesperados.

---

### 🔐 Pré-condições
- Aplicação disponível e acessível
- Usuário não autenticado
- Usuário na tela de **Cadastro**
- Formulário de cadastro carregado corretamente

---

### 📝 Passos
1. Acessar a tela de **Cadastro** do sistema
2. Preencher parcialmente ou totalmente os campos do formulário de cadastro
3. Recarregar a página (tecla **F5** ou botão de recarregar do navegador)
4. Observar o comportamento da aplicação após o recarregamento

---

### ✅ Resultado esperado
- Nenhum erro de aplicação exibido
- Formulário reiniciado ou mantido de forma consistente 
- Sistema permanece estável e funcional 

---

## ✅ CT18 – Pressionar Enter para submeter formulário

---

### 📌 Casos de teste
Validar o comportamento do sistema ao submeter o formulário de cadastro utilizando a tecla **Enter** em vez do clique no botão.

---

### 🎯 Objetivo
Verificar se o formulário de cadastro é submetido corretamente ao pressionar a tecla **Enter**, apresentando o mesmo comportamento do clique no botão **Inscrever-se**.

---

### 🔐 Pré-condições
- Aplicação disponível e acessível
- Usuário não autenticado
- Usuário na tela de **Cadastro**
- Campos do formulário preenchidos conforme o cenário de teste (válidos ou inválidos)

---

### 📝 Passos
1. Acessar a tela de **Cadastro** do sistema
2. Preencher os campos obrigatórios do formulário
3. Posicionar o cursor em qualquer campo do formulário
4. Pressionar a tecla **Enter** no teclado

---

### ✅ Resultado esperado
- Formulário submetido corretamente 
- Comportamento idêntico ao clique no botão **Inscrever-se** 
- Fluxo de sucesso ou erro respeitado conforme os dados informados 


