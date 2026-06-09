# Resumo Final

Implementei o blog Astro completo no repositório e validei a execução real: `npm run check` passou sem erros, `npm run build` gerou `dist`, e `npm run dev` iniciou corretamente em `http://127.0.0.1:4321/blog` com a base atual de GitHub Pages.

## Arquivos criados

- Configuração e projeto: [package.json](/Users/phmxavier/dev/blog/package.json), [package-lock.json](/Users/phmxavier/dev/blog/package-lock.json), [astro.config.mjs](/Users/phmxavier/dev/blog/astro.config.mjs), [tsconfig.json](/Users/phmxavier/dev/blog/tsconfig.json), [.gitignore](/Users/phmxavier/dev/blog/.gitignore), [README.md](/Users/phmxavier/dev/blog/README.md)
- Workflows: [.github/workflows/ci.yml](/Users/phmxavier/dev/blog/.github/workflows/ci.yml), [.github/workflows/deploy.yml](/Users/phmxavier/dev/blog/.github/workflows/deploy.yml)
- Público: [public/favicon.svg](/Users/phmxavier/dev/blog/public/favicon.svg), [public/CNAME](/Users/phmxavier/dev/blog/public/CNAME)
- Conteúdo e schema: [src/content.config.ts](/Users/phmxavier/dev/blog/src/content.config.ts), [src/content/posts/exemplo-primeiro-post.md](/Users/phmxavier/dev/blog/src/content/posts/exemplo-primeiro-post.md)
- Componentes e layouts: [src/components/Header.astro](/Users/phmxavier/dev/blog/src/components/Header.astro), [src/components/Footer.astro](/Users/phmxavier/dev/blog/src/components/Footer.astro), [src/components/PostCard.astro](/Users/phmxavier/dev/blog/src/components/PostCard.astro), [src/components/Seo.astro](/Users/phmxavier/dev/blog/src/components/Seo.astro), [src/layouts/BaseLayout.astro](/Users/phmxavier/dev/blog/src/layouts/BaseLayout.astro), [src/layouts/PostLayout.astro](/Users/phmxavier/dev/blog/src/layouts/PostLayout.astro)
- Páginas e utilitários: [src/pages/index.astro](/Users/phmxavier/dev/blog/src/pages/index.astro), [src/pages/blog/[slug].astro](/Users/phmxavier/dev/blog/src/pages/blog/[slug].astro), [src/pages/tags/[tag].astro](/Users/phmxavier/dev/blog/src/pages/tags/[tag].astro), [src/pages/about.astro](/Users/phmxavier/dev/blog/src/pages/about.astro), [src/pages/rss.xml.js](/Users/phmxavier/dev/blog/src/pages/rss.xml.js), [src/styles/global.css](/Users/phmxavier/dev/blog/src/styles/global.css), [src/utils/posts.ts](/Users/phmxavier/dev/blog/src/utils/posts.ts), [src/utils/site.ts](/Users/phmxavier/dev/blog/src/utils/site.ts)

## Como rodar localmente

- `npm install`
- `npm run dev`
- Abra `http://127.0.0.1:4321/blog`

Para criar um novo post, adicione um `.md` ou `.mdx` em `src/content/posts/` com o frontmatter definido na spec. `draft: true` fica visível em dev, mas não entra no build de produção.

## Como publicar

- No GitHub, vá em `Settings > Pages`
- Em `Build and deployment`, selecione `Source: GitHub Actions`
- Faça push na branch `main`

O CI valida com `npm ci`, `npm run check` e `npm run build`. O deploy publica automaticamente o conteúdo de `dist` no GitHub Pages.

## Quando ativar `blog.pedroxavier.com`

- Em [astro.config.mjs](/Users/phmxavier/dev/blog/astro.config.mjs), troque `useCustomDomain` para `true`
- Isso fará `site` virar `https://blog.pedroxavier.com` e `base` virar `/`
- Mantenha [public/CNAME](/Users/phmxavier/dev/blog/public/CNAME) com `blog.pedroxavier.com`
- No GitHub Pages, configure `Custom domain` para `blog.pedroxavier.com`
- No DNS, aponte `blog` para `phmxavier.github.io` com `CNAME`

## Referências

- https://docs.astro.build/en/guides/deploy/github/
- https://docs.astro.build/en/guides/content-collections/
- https://docs.astro.build/en/recipes/rss/
