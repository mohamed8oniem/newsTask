import { Grid, Typography } from '@mui/material';
import { ArticleCard } from './ArticleCard';
import { NewsAPIArticle } from '../types';

interface ArticleListProps {
  articles: NewsAPIArticle[];
}

export const ArticleList = ({ articles }: ArticleListProps) => {
  if (!articles || articles.length === 0) {
    return <Typography>No articles found.</Typography>;
  }

  return (
    <Grid container spacing={2}>
      {articles.map((article, idx) => (
        <Grid item xs={12} sm={6} md={4} key={idx}>
          <ArticleCard article={article} />
        </Grid>
      ))}
    </Grid>
  );
};
