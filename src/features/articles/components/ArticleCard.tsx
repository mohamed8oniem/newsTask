import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActions,
  Button,
} from '@mui/material';
import { NewsAPIArticle } from '../types';

interface ArticleCardProps {
  article: NewsAPIArticle;
}

export const ArticleCard = ({ article }: ArticleCardProps) => {
  const { title, description, url, urlToImage, publishedAt, author, source } =
    article;

  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      {urlToImage && (
        <CardMedia
          component="img"
          image={urlToImage}
          alt={title}
          sx={{ maxHeight: 200, objectFit: 'cover' }}
        />
      )}
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Typography variant="caption" color="text.secondary" display="block">
          {publishedAt} | {author || 'Unknown'} | {source}
        </Typography>
        <Typography variant="body2" mt={1} color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions sx={{ mt: 'auto' }}>
        <Button
          size="small"
          color="primary"
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Read More
        </Button>
      </CardActions>
    </Card>
  );
};
