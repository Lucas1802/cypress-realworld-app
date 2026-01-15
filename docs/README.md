# 🧪 Cypress Real World App – Testes de Login e Cadastro

Este repositório contém a **documentação e automação de testes funcionais** das funcionalidades de **Login** e **Cadastro de Usuário** do projeto **Cypress Real World App (RWA)**, desenvolvido como parte do curso **Guardião da Qualidade**, da **LumeStack**.

O objetivo deste projeto é aplicar **boas práticas de QA**, incluindo **Testes Manuais**, **Automação com Cypress**, **Page Object Model (POM)**, organização de cenários e **documentação profissional**.

---

## 📌 Sobre o Projeto

O **Real World App (RWA)** é um projeto **open source**, criado pela equipe do **Cypress**, que simula um aplicativo real de transferências financeiras, semelhante ao Venmo.

Repositório oficial do RWA:  
🔗 https://github.com/cypress-io/cypress-realworld-app

Neste projeto, foram criados e automatizados **casos de teste funcionais**, com foco em:

- Autenticação de usuários
- Cadastro de novos usuários
- Validação de campos obrigatórios
- Tratamento e persistência de mensagens de erro
- Navegação entre telas
- Comportamento de botões e formulários

---

## 🧠 Escopo de Testes

### 🔐 Funcionalidade: Login
Casos de teste **manuais e automatizados**, cobrindo os seguintes cenários:

- Login com credenciais válidas  
- Login com senha inválida  
- Login sem senha  
- Login sem nome de usuário  
- Login com usuário não cadastrado  
- Tentativa de login com campos vazios  
- Persistência da mensagem de erro após falha  
- Verificação do botão **Entrar** desabilitado  
- Navegação entre as telas **Entrar** e **Inscreva-se**

---

### 📝 Funcionalidade: Cadastro
Casos de teste **manuais e automatizados**, cobrindo os seguintes cenários:

- Cadastro de usuário com dados válidos  
- Cadastro com informações incompletas  
- Cadastro sem nome  
- Cadastro sem sobrenome  
- Cadastro sem nome de usuário  
- Cadastro sem senha  
- Cadastro com senha abaixo do mínimo permitido  
- Submissão do formulário utilizando a tecla **Enter**  
- Recarregamento da página durante o cadastro  
- Validação de campos obrigatórios

---

## ⚙️ Tecnologias Utilizadas

- Cypress  
- JavaScript  
- Page Object Model (POM)  
- Markdown (.md) para documentação  
- Node.js  

---

## ▶️ Como Executar os Testes Automatizados

### Instalar as dependências:

```bash
npm install
```
Executar o Cypress em modo interativo:
```bash 
npx cypress open
```

Executar os testes em modo headless:
```bash 
- npx cypress run
```

### 🎯 Objetivo do Projeto

- Consolidar conhecimentos em Testes Manuais e Automatizados
- Aplicar boas práticas de QA
- Criar documentação clara e profissional
- Simular cenários reais de testes de software
- Evoluir como Guardião da Qualidade

---

### 🚀 Autor

- Gabriel
- QA em formação | Automação de Testes
- Curso Guardião da Qualidade – LumeStack