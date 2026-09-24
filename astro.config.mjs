import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

// Fase 1: GitHub Pages no formato `https://<usuario>.github.io/<repositorio>/`
// Este repositório atual usa `phmxavier/blog`, então o build de produção precisa
// usar `base: '/blog'`.
const githubPagesSite = 'https://phmxavier.github.io';
const githubPagesBase = '/blog';

// Fase 2: quando `posts.pedroxavier.com` estiver ativo, troque `site` para
// `https://posts.pedroxavier.com`, ajuste `base` para `/` e mantenha `public/CNAME`.
const customDomainSite = 'https://posts.pedroxavier.com';
const useCustomDomain = true;

// O Astro espera um objeto de configuração (não uma função): com a forma
// `defineConfig(({ command }) => ...)` o `site` era ignorado e o RSS caía no
// fallback `https://phmxavier.github.io/blog`.
const isDev = process.argv.includes('dev');

export default defineConfig({
  site: useCustomDomain ? customDomainSite : githubPagesSite,
  // Em desenvolvimento local, manter `/` evita a URL `http://localhost:4321/blog/blog/...`.
  // No build para GitHub Pages sem domínio próprio, `/blog` é necessário por causa do nome do repositório.
  base: isDev || useCustomDomain ? '/' : githubPagesBase,
  integrations: [mdx()],
  markdown: {
    shikiConfig: {
      theme: 'github-dark'
    }
  }
});
