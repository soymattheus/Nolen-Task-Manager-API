# Nolen Task Manager API

---

## 🇧🇷 README — Português

### 📌 Descrição

API REST para gerenciamento de tarefas com autenticação JWT. O projeto foi desenvolvido utilizando **Node.js**, **Express**, **TypeScript** e **Sequelize**, seguindo boas práticas de arquitetura, validação de dados e organização de código.

---

## 🚀 Como rodar o projeto

### Pré-requisitos

- Node.js 18+
- Docker e Docker Compose
- npm (ou yarn/pnpm)

---

### 1️⃣ Clonar o repositório

```bash
git clone <url-do-repositorio>
cd nolen-task-manager
```

---

### 2️⃣ Subir apenas o banco de dados (PostgreSQL)

O projeto utiliza PostgreSQL via Docker.

```bash
docker compose up -d
```

Credenciais do banco (DEV):

- **Usuário:** docker
- **Senha:** docker
- **Banco:** task-manager-dev
- **Porta:** 5432

---

### 3️⃣ Configurar variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
PORT=9891

DB_NAME=task-manager-dev
DB_USERNAME=docker
DB_PASSWORD=docker
DB_HOST=localhost
DB_PORT=5432

JWT_SECRET=feb2016
```

---

### 4️⃣ Instalar dependências

```bash
npm install
```

---

### 5️⃣ Rodar as migrations

Após subir o banco com Docker, execute as migrations do Sequelize:

```bash
npx sequelize-cli db:migrate
```

Isso irá criar as tabelas necessárias no banco de dados.

---

### 6️⃣ Rodar a aplicação em desenvolvimento

```bash
npm run dev
```

A API estará disponível em:

```
http://localhost:9891
```

---

## 🧱 Stack utilizada

### Back-end

- Node.js
- Express
- TypeScript
- Sequelize ORM
- PostgreSQL
- JWT (autenticação)
- Zod (validação de dados)

### Infra

- Docker
- Docker Compose (PostgreSQL)

---

## 🧠 Decisões técnicas e arquiteturais

- **Express + TypeScript** para maior controle e clareza da API
- **Sequelize ORM** para mapeamento relacional com PostgreSQL
- **JWT** para autenticação stateless
- **Zod** para validação e normalização de dados de entrada
- **Separação de responsabilidades** entre controllers, models, schemas e middlewares
- **Docker apenas para o banco** em ambiente de desenvolvimento, mantendo a API rodando localmente

---

## 📂 Organização de pastas (resumo)

```
src/
├── @types/
├── config/
├── controller/
├── middleware/
├── models/
├── routes/
├── schemas/
├── types/
└── server.ts
```

---

## 👨‍💻 Autor

**Matheus Tavares**

---

Este projeto foi desenvolvido com foco em aprendizado, clareza arquitetural e boas práticas de desenvolvimento de APIs.

---

## 🇺🇸 README — English

### 📌 Description

REST API for task management with JWT authentication. This project was built using **Node.js**, **Express**, **TypeScript**, and **Sequelize**, focusing on clean architecture and best practices.

---

## 🚀 How to run the project

### Requirements

- Node.js 18+
- Docker & Docker Compose
- npm (or yarn/pnpm)

---

### 1️⃣ Clone the repository

```bash
git clone <repository-url>
cd nolen-task-manager
```

---

### 2️⃣ Start only the database (PostgreSQL)

```bash
docker compose up -d service-pg
```

Database credentials (DEV):

- **User:** docker
- **Password:** docker
- **Database:** task-manager-dev
- **Port:** 5432

---

### 3️⃣ Environment variables

Create a `.env` file in the project root:

```env
PORT=9891

DB_NAME=task-manager-dev
DB_USERNAME=docker
DB_PASSWORD=docker
DB_HOST=localhost
DB_PORT=5432

JWT_SECRET=feb2016
```

---

### 4️⃣ Install dependencies

```bash
npm install
```

---

### 5️⃣ Run the migrations

After starting the database with Docker, run the Sequelize migrations:

```bash
npx sequelize-cli db:migrate
```

This will create the necessary tables in the database.

---

### 6️⃣ Run the application in development mode

```bash
npm run dev
```

The API will be available at:

```
http://localhost:9891
```

---

## 🧱 Tech stack

### Back-end

- Node.js
- Express
- TypeScript
- Sequelize ORM
- PostgreSQL
- JWT Authentication
- Zod Validation

### Infrastructure

- Docker
- Docker Compose (PostgreSQL)

---

## 🧠 Technical and architectural decisions

- **Express + TypeScript** for better control and type safety
- **Sequelize ORM** for relational database mapping
- **JWT** for stateless authentication
- **Zod** for request validation
- **Clear separation of concerns** across layers
- **Docker used only for the database** during development

---

## 📂 Folder organization (summary)

```
src/
├── @types/
├── config/
├── controller/
├── middleware/
├── models/
├── routes/
├── schemas/
├── types/
└── server.ts
```

---

## 👨‍💻 Author

**Matheus Tavares**

---

This project focuses on learning, clean architecture, and best practices for API development.
