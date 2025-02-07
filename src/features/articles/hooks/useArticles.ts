// src/features/articles/hooks/useArticles.ts

import { useInfiniteQuery } from '@tanstack/react-query';
import { fetchArticles } from '../services/fetchArticles';
import { ArticlesFilter, NewsAPIArticle } from '../types';

export const useArticles = (
  filter: ArticlesFilter = { query: 'latest', pageSize: 10 }
) => {
  return useInfiniteQuery<NewsAPIArticle[], Error>({
    queryKey: ['articles', filter.query, filter.from, filter.to],

    queryFn: async ({ pageParam = 1 }: any) => {
      return fetchArticles({ ...filter, page: pageParam });
    },

    initialPageParam: 1,

    getNextPageParam: (lastPage, allPages) =>
      lastPage.length > 0 ? allPages.length + 1 : undefined,
  });
};
