import { useState } from 'react';
import {
  Box,
  Typography,
  CircularProgress,
  Alert,
  Button,
} from '@mui/material';

import { ArticlesFilter } from '../features/articles/types';
import { useArticles } from '../features/articles/hooks/useArticles';
import { SearchFilterBar } from '../features/articles/components/SearchFilterBar';
import { ArticleList } from '../features/articles/components/ArticleList';

export const Home = () => {
  const [filter, setFilter] = useState<ArticlesFilter>({
    query: 'latest',
    pageSize: 10,
  });
  const {
    data,
    isLoading,
    isError,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useArticles(filter);

  const handleFilterChange = (newFilter: ArticlesFilter) => {
    setFilter({ ...newFilter });
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Latest News
      </Typography>

      {/* Filter */}
      <SearchFilterBar onFilterChange={handleFilterChange} />

      {/* Loading, Error, and Data States */}
      {isLoading && (
        <Box display="flex" justifyContent="center" my={4}>
          <CircularProgress />
        </Box>
      )}

      {isError && (
        <Alert severity="error">
          {error instanceof Error ? error.message : 'Something went wrong!'}
        </Alert>
      )}

      {!isLoading && !isError && (
        <>
          <ArticleList articles={data?.pages.flat() || []} />

          <Box display="flex" justifyContent="center" my={4}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => fetchNextPage()}
              disabled={!hasNextPage || isFetchingNextPage}
            >
              {isFetchingNextPage
                ? 'Loading More...'
                : hasNextPage
                ? 'Load More'
                : 'No More News'}
            </Button>
          </Box>
        </>
      )}
    </Box>
  );
};
