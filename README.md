# API Tarefa - Node.Js + Express
API REST simples para gerenciar tarefas

## Pré-requisitos
- Node.js instalado
## Como rodar
### Instalar dependências
```bash
npm i
```
### Iniciar servidor
```bash
node index.js
```
### Acessar
Abra o nevegador em: http://localhost:3000

## Endpoints
### Tarefas
## 🔗 Endpoints

| Método | Endpoint           | Descrição                          |
|--------|-------------------|------------------------------------|
| GET    | `/tarefas`         | Lista todas as tarefas             |
| GET    | `/tarefas/:id`     | Busca uma tarefa específica        |
| GET    | `/tarefas?status=` | Busca tarefas por status           |
| POST   | `/tarefas`         | Cria uma nova tarefa               |
| PUT    | `/tarefa/:id`      | Atualiza uma tarefa existente      |
| DELETE | `/tarefa/:id`      | Remove uma tarefa                  |

## Tecnologias
- Node.js
- Express
## Notas
- Os dados são armazenados em memória (reiniciar o servidor apaga tudo)
