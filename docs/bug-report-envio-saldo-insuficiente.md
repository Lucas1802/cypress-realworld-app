# Bug – Envio de dinheiro com saldo insuficiente

## ❌ CT02 – Enviar dinheiro com saldo insuficiente

## Descrição
Ao realizar uma transferência com valor maior que o saldo disponível, o sistema permite concluir a transação com sucesso, contrariando a regra de negócio esperada.

## Passos para reproduzir
1. Realizar login com usuário válido
2. Acessar a funcionalidade "New Transaction"
3. Selecionar um contato
4. Informar um valor maior que o saldo disponível
5. Confirmar a transação

## Resultado esperado
O sistema deve exibir uma mensagem de erro informando saldo insuficiente e impedir a transação.

## Resultado atual
O sistema permite a transação e exibe mensagem de sucesso.

## Impacto
Alto – permite inconsistência financeira e saldo negativo.

## Ambiente
- Real World App (Cypress)
- Testes E2E com Cypress