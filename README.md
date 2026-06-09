# Blog Pedro Xavier

Blog pessoal criado com Astro e publicado no GitHub Pages.

## Desenvolvimento local

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Novo post

Criar um arquivo Markdown em:

```txt
src/content/posts/nome-do-post.md
```

Usar o frontmatter padrao:

```md
---
title: "Titulo"
description: "Descricao"
pubDate: 2026-06-09
tags:
  - arquitetura
draft: false
---
```

`updatedDate` e opcional. Posts com `draft: true` nao entram no build de producao.

## Deploy

O deploy acontece automaticamente via GitHub Actions em todo push para a branch `main`.

No GitHub:

1. Abra `Settings > Pages`.
2. Em `Build and deployment`, selecione `Source: GitHub Actions`.

## Dominio customizado

O projeto sai configurado para a fase inicial do GitHub Pages em `https://phmxavier.github.io/blog/`.

Quando `blog.pedroxavier.com` for ativado:

1. Altere `astro.config.mjs` para usar `site: "https://blog.pedroxavier.com"`.
2. Altere `astro.config.mjs` para usar `base: "/"`.
3. Mantenha `public/CNAME` com `blog.pedroxavier.com`.
4. Configure `Settings > Pages > Custom domain` no GitHub.
5. No DNS, aponte `blog` para `phmxavier.github.io` com um registro `CNAME`.

