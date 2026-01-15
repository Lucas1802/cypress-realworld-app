# 🤖 Testes Manuais – Login
Projeto: Cypress Real World App (RWA)

---

## 📌 Informações Gerais

- **Aplicação:** Cypress Real World App
- **Feature:** Login
- **Tipo de Teste:** Manual 
- **Ambiente:** Local
- **URL:** http://localhost:3000/signup
- **Responsável:** Gabriel

---

## ✅ CT02 – Login sem senha

---

### 📌 Casos de teste
Validar o comportamento do sistema ao tentar realizar login sem informar a senha do usuário.

---

### 🎯 Objetivo
Garantir que o sistema não permita o login quando o campo **Senha** não for preenchido, assegurando a validação correta dos campos obrigatórios e a segurança do acesso.

---

### 🔐 Pré-condições
- Usuário previamente cadastrado no sistema
- Aplicação disponível e acessível
- Usuário na tela de login do sistema

---

### 📝 Passos
1. Acessar a tela de login
2. Preencher apenas o campo **Nome do Usuário** com um valor válido
3. Deixar o campo **Senha** em branco
4. Clicar no botão **Entrar**

---

### ✅ Resultado esperado
- Login não realizado 
- Mensagem de erro exibida ou validação de campo obrigatório 
- Usuário permanece na tela de login 

---

## ✅ CT04 – Login sem Nome do Usuário

---

### 📌 Casos de teste
Validar o comportamento do sistema ao tentar realizar login sem informar o **Nome do Usuário**.

---

### 🎯 Objetivo
Garantir que o sistema impeça o login quando o campo **Nome do Usuário** não for preenchido, exibindo uma mensagem de erro adequada e mantendo o usuário na tela de login.

---

### 🔐 Pré-condições
- Usuário previamente cadastrado no sistema
- Aplicação disponível e acessível
- Usuário na tela de login do sistema

---

### 📝 Passos
1. Acessar a tela de login
2. Preencher apenas o campo **Senha** com um valor válido
3. Deixar o campo **Nome do Usuário** em branco
4. Clicar no botão **Entrar**

---

### ✅ Resultado esperado
- Login não realizado 
- Mensagem de erro exibida informando que o nome do usuário é obrigatório 
- Usuário permanece na tela de login 

---

## ✅ CT06 – Login com nome do usuário não cadastrado

---

### 📌 Casos de teste
Validar o comportamento do sistema ao tentar realizar login utilizando um **nome de usuário que não está cadastrado**.

---

### 🎯 Objetivo
Garantir que o sistema não permita o login quando o nome do usuário informado não existir na base de dados, exibindo uma mensagem de erro apropriada.

---

### 🔐 Pré-condições
- Aplicação disponível e acessível
- Usuário na tela de login do sistema
- Nome de usuário informado **não cadastrado** no sistema

---

### 📝 Passos
1. Acessar a tela de login
2. Preencher o campo **Nome do Usuário** com um valor inexistente no sistema
3. Preencher o campo **Senha** com qualquer valor
4. Clicar no botão **Entrar**

---

### ✅ Resultado esperado
- Login não realizado 
- Mensagem de erro exibida informando credenciais inválidas ou usuário não encontrado
- Usuário permanece na tela de login

---

## ✅ CT07 – Tentativa de login com campos vazios

---

### 📌 Casos de teste
Validar o comportamento do sistema ao tentar realizar login **sem preencher nenhum dos campos obrigatórios**.

---

### 🎯 Objetivo
Garantir que o sistema impeça a tentativa de login quando os campos obrigatórios estiverem vazios, exibindo mensagens de validação adequadas e mantendo o botão de acesso desabilitado ou bloqueando a ação.

---

### 🔐 Pré-condições
- Aplicação disponível e acessível
- Usuário na tela de login do sistema
- Nenhum campo preenchido (Nome do Usuário e Senha vazios)

---

### 📝 Passos
1. Acessar a tela de login
2. Não preencher o campo **Nome do Usuário**
3. Não preencher o campo **Senha**
4. Observar o estado do botão **Entrar**
5. Tentar clicar no botão **Entrar** (caso esteja habilitado)

---

### ✅ Resultado esperado
- Botão **Entrar** desabilitado ou ação de login bloqueada
- Mensagens de validação exibidas informando campos obrigatórios
- Login não realizado
- Usuário permanece na tela de login

---

## ✅ CT08 – Verificar se o botão “Entrar” fica desabilitado sem dados

---

### 📌 Casos de teste
Validar o comportamento do botão **Entrar** quando nenhum dado é informado na tela de login.

---

### 🎯 Objetivo
Garantir que o sistema **não permita a submissão do formulário de login** quando os campos obrigatórios estiverem vazios, mantendo o botão **Entrar** desabilitado ou bloqueando a ação.

---

### 🔐 Pré-condições
- Aplicação disponível e acessível
- Usuário na tela de login
- Campos **Nome do Usuário** e **Senha** vazios

---

### 📝 Passos
1. Acessar a tela de login do sistema
2. Não preencher o campo **Nome do Usuário**
3. Não preencher o campo **Senha**
4. Verificar o estado do botão **Entrar**
5. Tentar interagir com o botão **Entrar**

---

### ✅ Resultado esperado
- Botão **Entrar** permanece desabilitado
- Submissão do formulário não permitida
- Login não realizado
- Usuário permanece na tela de login

---

## ✅ CT09 – Persistência de erro após tentativa inválida de login

---

### 📌 Casos de teste
Validar se a mensagem de erro exibida após uma tentativa de login inválida **permanece visível** enquanto o usuário continuar na tela de login.

---

### 🎯 Objetivo
Verificar se a mensagem de erro apresentada após uma falha de autenticação **não desaparece automaticamente**, garantindo que o usuário compreenda o motivo do erro.

---

### 🔐 Pré-condições
- Aplicação disponível e acessível
- Usuário na tela de login
- Usuário **não autenticado**
- Credenciais inválidas disponíveis para teste

---

### 📝 Passos
1. Acessar a tela de login do sistema
2. Preencher o campo **Nome do Usuário** com um valor inválido
3. Preencher o campo **Senha** com um valor inválido
4. Clicar no botão **Entrar**
5. Observar a exibição da mensagem de erro
6. Permanecer na tela de login sem realizar novas ações

---

### ✅ Resultado esperado
- Login não realizado
- Mensagem de erro exibida após tentativa inválida
- Mensagem de erro permanece visível na tela 
- Usuário permanece na tela de login 

---

## ✅ CT16 – Verificar navegação entre “Entrar” e “Inscreva-se”

---

### 📌 Casos de teste
Validar a navegação entre as telas de **Login** e **Cadastro**, garantindo que os links “Entrar” e “Inscreva-se” direcionem corretamente o usuário sem erros.

---

### 🎯 Objetivo
Verificar se o sistema permite a navegação correta entre as telas de login e cadastro, assegurando uma experiência de navegação fluida e sem falhas.

---

### 🔐 Pré-condições
- Aplicação disponível e acessível
- Usuário não autenticado
- Usuário na tela de login ou cadastro

---

### 📝 Passos
1. Acessar a tela de **Login** do sistema
2. Clicar no link **“Inscreva-se”**
3. Verificar se o sistema redireciona para a tela de **Cadastro**
4. Na tela de cadastro, clicar no link **“Entrar”**
5. Verificar se o sistema retorna para a tela de **Login**

---

### ✅ Resultado esperado
- Navegação realizada corretamente entre Login e Cadastro
- Nenhum erro exibido durante a navegação
- URLs correspondentes às telas acessadas corretamente
- Interface carregada corretamente em ambas as telas