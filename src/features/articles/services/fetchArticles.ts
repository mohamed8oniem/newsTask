import { ArticlesFilter, NewsAPIArticle } from '../types';
import { fetchFromNewsAPI } from './articlesService';
import { fetchFromNYTimes } from './nyTimeService';
import { fetchFromTheGuardian } from './theGuardianService';

export async function fetchArticles(
  filter: ArticlesFilter
): Promise<NewsAPIArticle[]> {
  try {
    const results = await Promise.allSettled([
      fetchFromNewsAPI(filter),
      fetchFromNYTimes(filter),
      fetchFromTheGuardian(filter),
    ]);

    //filter success results
    const successfulResults = results
      .filter((result) => result.status === 'fulfilled')
      .flatMap(
        (result) => (result as PromiseFulfilledResult<NewsAPIArticle[]>).value
      );

    return successfulResults.sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );
  } catch (error) {
    console.error('Unexpected error fetching articles:', error);
    throw new Error('Failed to fetch news articles');
  }
}
