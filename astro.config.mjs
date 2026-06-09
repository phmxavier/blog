import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

// Fase 1: GitHub Pages no formato `https://<usuario>.github.io/<repositorio>/`
// Este repositório atual usa `phmxavier/blog`, então o build de produção precisa
// usar `base: '/blog'`.
const githubPagesSite = 'https://phmxavier.github.io';
const githubPagesBase = '/blog';

// Fase 2: quando `blog.pedroxavier.com` estiver ativo, troque `site` para
// `https://blog.pedroxavier.com`, ajuste `base` para `/` e mantenha `public/CNAME`.
const customDomainSite = 'https://blog.pedroxavier.com';
const useCustomDomain = true;

export default defineConfig(({ command }) => {
  const isDev = command === 'dev';

  return {
    site: useCustomDomain ? customDomainSite : githubPagesSite,
    // Em desenvolvimento local, manter `/` evita a URL `http://localhost:4321/blog/blog/...`.
    // No build para GitHub Pages, `/blog` continua necessário por causa do nome do repositório.
    base: isDev || useCustomDomain ? '/' : githubPagesBase,
    integrations: [mdx()],
    markdown: {
      shikiConfig: {
        theme: 'github-light'
      }
    }
  };
});
