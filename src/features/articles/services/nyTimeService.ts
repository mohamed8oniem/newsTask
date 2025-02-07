import axios from 'axios';
import { ArticlesFilter, NewsAPIArticle } from '../types';

const NYTIMES_API_KEY = import.meta.env.VITE_NY_API_KEY;

const NYTIMES_API = import.meta.env.VITE_API_BASE_URL_NY;

export async function fetchFromNYTimes(
  filter: ArticlesFilter
): Promise<NewsAPIArticle[]> {
  const params = {
    'api-key': NYTIMES_API_KEY,
    q: filter.query || 'latest',
    begin_date: filter.from,
    end_date: filter.to,
    page: filter.page || 1,
  };

  const response = await axios.get<{ response: { docs: any[] } }>(NYTIMES_API, {
    params,
  });

  return response.data.response.docs.map((article) => ({
    source: 'NYTimes',
    title: article.headline.main,
    description: article.abstract,
    url: article.web_url,
    publishedAt: article.pub_date,
  }));
}
