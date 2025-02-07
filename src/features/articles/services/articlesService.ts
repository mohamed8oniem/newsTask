import axiosInstance from '../../../config/axios';
import { ArticlesFilter, NewsAPIArticle } from '../types';

const apiKey = import.meta.env.VITE_NEWS_API_KEY;

export async function fetchFromNewsAPI(
  filter: ArticlesFilter
): Promise<NewsAPIArticle[]> {
  const params = new URLSearchParams({
    apiKey,
    q: filter.query || 'latest',
    language: 'en',
    sortBy: 'publishedAt',
    pageSize: (filter.pageSize || 10).toString(),
    page: (filter.page || 1).toString(),
  });

  const response = await axiosInstance.get<{ articles: any[] }>(
    `/everything?${params.toString()}`
  );

  return response.data.articles.map((article) => ({
    source: 'NewsAPI',
    title: article.title,
    description: article.description,
    url: article.url,
    publishedAt: article.publishedAt,
    imageUrl: article.urlToImage,
  }));
}
