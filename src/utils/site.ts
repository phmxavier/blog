export const SITE_TITLE = 'Pedro Xavier';
export const SITE_DESCRIPTION =
  'Blog pessoal sobre arquitetura, desenvolvimento de software e IA aplicada.';

export function withBase(path: string) {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}${normalizedPath}` || normalizedPath;
}

export function absoluteUrl(pathname: string, site?: URL) {
  const origin = site ?? new URL('http://localhost');
  return new URL(pathname, origin).toString();
}

export function slugifyTag(tag: string) {
  return encodeURIComponent(
    tag
      .trim()
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/\s+/g, '-')
  );
}

