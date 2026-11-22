# MoneyTrack API

API REST do MoneyTrack, um aplicativo de controle financeiro. Atualmente, a API permite consultar e gerenciar despesas, armazenadas em um banco MongoDB.

## Requisitos

- Node.js e npm
- MongoDB local ou uma instância MongoDB Atlas

## Como executar

1. Clone o repositório e entre na pasta do projeto.
2. Instale as dependências:

   ```bash
   npm install
   ```

3. Crie o arquivo `.env` a partir do exemplo:

   ```powershell
   # Windows PowerShell
   Copy-Item .env.example .env
   ```

   Em macOS ou Linux, use `cp .env.example .env`.

4. Edite o `.env` e configure `MONGO_URI` com o endereço do seu MongoDB. O exemplo já aponta para uma instância local em `mongodb://127.0.0.1:27017/plantacoes`; confirme que o MongoDB está em execução ou substitua pela URI do MongoDB Atlas. Se necessário, altere também `PORT` (padrão: `3000`).
5. Inicie a API em modo de desenvolvimento:

   ```bash
   npm run dev
   ```

O servidor será iniciado em `http://localhost:3000` (ou na porta definida em `PORT`) após conectar ao MongoDB. Para verificar se está no ar, acesse `GET /`, que retorna `{"mensagem":"API no ar!"}`.

## Rotas de despesas

A base das rotas é `/api/despesas`.

| Método | Rota | Descrição |
|---|---|---|
| `GET` | `/api/despesas` | Lista as despesas |
| `GET` | `/api/despesas/:id` | Busca uma despesa pelo ID |
| `POST` | `/api/despesas` | Cria uma despesa |
| `PUT` | `/api/despesas/:id` | Atualiza uma despesa |
| `DELETE` | `/api/despesas/:id` | Remove uma despesa |

Para criar uma despesa, envie um corpo JSON com os campos obrigatórios `descricao`, `valor`, `categoria` e `data`. Exemplo:

```json
{
  "descricao": "Conta de energia",
  "valor": 125.5,
  "categoria": "Moradia",
  "data": "2026-11-22"
}
```

Inclua o cabeçalho `Content-Type: application/json` nas requisições que enviam um corpo.
