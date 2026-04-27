export type NewsItem = {
  id: number;
  slug: string;
  image: {
    url: string;
  };
  date: string;
  title: string;
  description: string;
  text?: string;
};