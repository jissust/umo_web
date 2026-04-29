export type NewsItem = {
  id: number;
  slug: string;
  image: [
    {url: string;}
  ];
  publishedAt: string;
  title: string;
  excerpt: string;
  text?: string;
};