# Portfolio

Monorepo simples com um front-end em Next.js e uma API em Hono para servir os dados do portfolio.

## Como rodar

1. Instale as dependencias uma vez: `npm install`.
2. Crie o arquivo `.env` a partir de `.env.example`.
3. Rode `npm run dev`.
4. A web sobe em `http://localhost:3000` e a API em `http://localhost:4000`.

## Variaveis de ambiente

Use este arquivo como base:

```env
API_PORT=4000
WEB_PORT=3000
WEB_HOSTNAME=0.0.0.0
API_BASE_URL=http://localhost:4000
```

- `API_PORT`: porta da API.
- `WEB_PORT`: porta do servidor Next.
- `WEB_HOSTNAME`: host de bind da web.
- `API_BASE_URL`: URL usada pela web para consultar a API no runtime.

## Como rodar com Docker

1. Crie o arquivo `.env` a partir de `.env.example`.
2. Build das imagens:
   `docker build -f Dockerfile.api -t portfolio-api .`
   `docker build -f Dockerfile.web -t portfolio-web .`
3. Suba a API:
   `docker run --rm --env-file .env -p 4000:4000 portfolio-api`
4. Em outro terminal, suba a web:
   `docker run --rm --env-file .env -e API_BASE_URL=http://host.docker.internal:4000 -p 3000:3000 portfolio-web`
5. Com Compose:
   `docker compose up --build`

No `docker-compose.yml`, a web usa `API_BASE_URL=http://api:${API_PORT}` para falar com a API pela rede interna do Docker.

## Estrutura

```text
apps/
  web/  -> Next.js com TypeScript
  api/  -> Hono com TypeScript
```

## Tecnologias principais

- Next.js, React e Tailwind CSS no frontend
- Hono no backend
