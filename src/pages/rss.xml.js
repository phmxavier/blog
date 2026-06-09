import rss from '@astrojs/rss';
import { getPublishedPosts } from '../utils/posts';

export async function GET(context) {
  const posts = await getPublishedPosts();

  return rss({
    title: 'Pedro Xavier',
    description:
      'Blog pessoal sobre arquitetura, desenvolvimento de software e IA aplicada.',
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: `/blog/${post.id}/`
    })),
    customData: '<language>pt-BR</language>'
  });
}

