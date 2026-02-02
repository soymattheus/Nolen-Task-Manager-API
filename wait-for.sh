#!/bin/sh

HOST="$1"

echo "⏳ Aguardando Postgres em $HOST:5432..."

until nc -z "$HOST" 5432; do
  sleep 2
done

echo "✅ Postgres disponível!"

echo "🚀 Rodando migrations..."
npx sequelize-cli db:migrate

echo "▶️ Iniciando API..."
npm run dev
