export interface NewsAPISource {
  id: string | null;
  name: string;
}

export interface NewsAPIArticle {
  source: string;
  title: string;
  description?: string;
  url: string;
  publishedAt: string;
  imageUrl?: string;
  urlToImage?: string;
  pillarName?: string;
  author?: string;
}

export interface ArticlesFilter {
  query: string;
  from?: string;
  page?: number;
  pageSize?: number;
  to?: string;
}
