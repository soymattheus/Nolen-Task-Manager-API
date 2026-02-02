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
$ git clone https://github.com/soymattheus/Nolen-Task-Manager-API

$ cd nolen-task-manager
```

---

## RODAR EM DESENVOLVIMENTO

### 1️⃣ Subir apenas o banco de dados (PostgreSQL)

O projeto utiliza PostgreSQL via Docker.

```bash
$ docker compose up -d service-pg
```

Credenciais do banco (DEV):

- **Usuário:** docker
- **Senha:** docker
- **Banco:** task-manager-dev
- **Porta:** 5432

---

### 2️⃣ Configurar variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
NODE_ENV=development

PORT=9891

DB_NAME=task-manager-dev
DB_USERNAME=docker
DB_PASSWORD=docker
DB_HOST=localhost
DB_PORT=5432

JWT_SECRET=your-secret-key
```

---

### 3️⃣ Instalar dependências

```bash
$ npm install
```

---

### 4️⃣ Rodar as migrations

Após subir o banco com Docker, execute as migrations do Sequelize:

```bash
$ npx sequelize-cli db:migrate
```

Isso irá criar as tabelas necessárias no banco de dados.

---

### 5️⃣ Rodar a aplicação em desenvolvimento

```bash
$ npm run dev
```

A API estará disponível em:

```
http://localhost:9891
```

---

## RODAR EM TESTE

### 1️⃣ Configurar variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
NODE_ENV=test

PORT=9891

DB_NAME=task-manager-dev
DB_USERNAME=docker
DB_PASSWORD=docker
DB_HOST=localhost
DB_PORT=5432

JWT_SECRET=your-secret-key
```

---

### 2️⃣ Subir todo o projeto

O projeto utiliza PostgreSQL via Docker.

```bash
$ docker compose up --build
```

---

Disponível em

```bash
PostgreSQL → service-pg:5432
API → http://localhost:9891
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
- **Docker e Docker Compose** para padronização de ambientes, isolamento de dependências e orquestração de serviços (API + PostgreSQL), facilitando setup local, testes e portabilidade entre ambientes

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

## RUN IN DEVELOPMENT MODE

### 1️⃣ Start only the database (PostgreSQL)

OThe project uses PostgreSQL via Docker.

```bash
$ docker compose up -d service-pg
```

Database credentials (DEV):

- **User:** docker
- **Password:** docker
- **Database:** task-manager-dev
- **Port:** 5432

---

### 2️⃣ Configure environment variables

Create a .env file in the project root:

```env
NODE_ENV=development

PORT=9891

DB_NAME=task-manager-dev
DB_USERNAME=docker
DB_PASSWORD=docker
DB_HOST=localhost
DB_PORT=5432

JWT_SECRET=your-secret-key
```

---

### 3️⃣ Install dependencies

```bash
$ npm install
```

---

### 4️⃣ Run migrations

After starting the database with Docker, run the Sequelize migrations:

```bash
$ npx sequelize-cli db:migrate
```

This will create the required tables in the database.

---

### 5️⃣ Run the application in development mode

```bash
$ npm run dev
```

The API will be available at:

```
http://localhost:9891
```

---

## RUN IN TEST MODE

### 1️⃣ Configure environment variables

Crie um arquivo `.env` na raiz do projeto:

```env
NODE_ENV=test

PORT=9891

DB_NAME=task-manager-dev
DB_USERNAME=docker
DB_PASSWORD=docker
DB_HOST=localhost
DB_PORT=5432

JWT_SECRET=your-secret-key
```

---

### 2️⃣ Start the full project

The project uses PostgreSQL via Docker.

```bash
$ docker compose up --build
```

---

Disponível em

```bash
PostgreSQL → service-pg:5432
API → http://localhost:9891
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
- **Docker and Docker** Compose for environment standardization, dependency isolation, and service orchestration (API + PostgreSQL), enabling easier local setup, testing, and portability across environments.

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
