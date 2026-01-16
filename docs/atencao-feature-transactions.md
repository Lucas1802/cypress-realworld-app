## ⚠️ Observação Importante sobre os Testes de Transactions

O Cypress Real World App (RWA) é um **RWA de demonstração** que possui um comportamento específico:  
**sempre que o backend é reiniciado, o banco de dados é resetado automaticamente** para o estado inicial (seed).

Por esse motivo, **usuários criados manualmente durante a execução da aplicação não persistem** entre reinicializações.

---

### ❗ Impacto nos testes automatizados

Nos testes relacionados à feature **Visualizar Histórico de Transações**, existe um cenário que utiliza um **usuário criado durante a execução do sistema** para validar o comportamento de histórico sem transações.

Quando outra pessoa clona este repositório e executa a aplicação em seu próprio ambiente:

- O banco de dados será resetado
- O usuário criado anteriormente **não existirá**
- O teste poderá falhar por **usuário inexistente**, e não por erro na automação

Esse comportamento é esperado, dado o funcionamento padrão do RWA.

---

### ✅ Como executar os testes corretamente

Para executar os testes com sucesso, recomenda-se:

- Utilizar os **usuários seedados padrão do RWA**, que estão ja dentro do banco
- Garantir que o backend do RWA esteja em execução antes de rodar os testes Cypress

Esses usuários seedados garantem previsibilidade e estabilidade nos testes automatizados.

---

### 🔧 Possíveis melhorias futuras

Como melhoria futura para tornar os testes mais robustos e independentes do estado inicial do banco de dados, podem ser adotadas as seguintes abordagens:

- Criação de usuários e transações via **API** antes da execução dos testes  
- Uso de **requisições diretas (`cy.request`)** para preparar o estado do sistema  
- Implementação de **custom commands** para setup de dados  
- Utilização de **mocks ou stubs** para cenários específicos  
- Controle de seed de dados específico para ambiente de testes

Essas estratégias permitiriam que os testes fossem totalmente independentes dos dados seedados do RWA, aumentando a confiabilidade e escalabilidade da automação.

---

### 📌 Conclusão

A decisão de utilizar usuários seedados do próprio RWA foi tomada para manter a automação **simples, estável e compatível com o comportamento padrão da aplicação**, especialmente em um contexto de aprendizado.

As melhorias citadas podem ser implementadas futuramente conforme a evolução do projeto e do conhecimento em automação de testes.