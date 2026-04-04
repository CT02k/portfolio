# Portfolio

Monorepo simples com um front-end em Next.js e uma API em Hono para servir os dados do portfólio.

## Como rodar

1. Instale as dependências uma vez: `npm install`.
2. Ambiente de desenvolvimento completo: `npm run dev` (sobe web em `http://localhost:3000` e API em `http://localhost:4000`).

## Como rodar com Docker

1. Build das imagens: `docker build -f Dockerfile.api -t portfolio-api .` e `docker build -f Dockerfile.web -t portfolio-web .`.
2. Suba a API com `docker run --rm -p 4000:4000 portfolio-api`.
3. Em outro terminal, suba a web com `docker run --rm -p 3000:3000 -e NEXT_PUBLIC_API_URL=http://host.docker.internal:4000 portfolio-web`.
4. Se a sua instalaÃ§Ã£o do Docker tiver suporte a Compose, o arquivo `docker-compose.yml` tambÃ©m estÃ¡ pronto para uso.

## Estrutura

```
apps/
  web/  -> Next.js com TypeScript
  api/  -> Hono com TypeScript
```

## Tecnologias principais

- Next.js, React e Tailwind CSS no frontend
- Hono
