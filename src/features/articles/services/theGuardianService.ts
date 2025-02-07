import axios from 'axios';
import { ArticlesFilter, NewsAPIArticle } from '../types';

const VITE_THE_GARDIAN_API_KEY = import.meta.env.VITE_THE_GARDIAN_API_KEY;

const VITE_API_BASE_URL_THE_GARDIAN = import.meta.env
  .VITE_API_BASE_URL_THE_GARDIAN;

export async function fetchFromTheGuardian(
  filter: ArticlesFilter
): Promise<NewsAPIArticle[]> {
  const params = {
    'api-key': VITE_THE_GARDIAN_API_KEY,
    q: filter.query || 'latest',
    begin_date: filter.from,
    end_date: filter.to,
    page: filter.page || 1,
  };

  const response = await axios.get<{ response: { results: any[] } }>(
    VITE_API_BASE_URL_THE_GARDIAN,
    {
      params,
    }
  );

  return response.data.response.results.map((article) => ({
    source: 'TheGuardian',
    title: article?.webTitle,
    url: article.webUrl,
    publishedAt: article.webPublicationDate,
  }));
}
