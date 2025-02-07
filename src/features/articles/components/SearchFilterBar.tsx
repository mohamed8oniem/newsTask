import { useState, FormEvent } from 'react';
import { Box, TextField, Button } from '@mui/material';
import { ArticlesFilter } from '../types';

interface SearchFilterBarProps {
  onFilterChange: (newFilter: ArticlesFilter) => void;
}

export function SearchFilterBar({ onFilterChange }: SearchFilterBarProps) {
  const [query, setQuery] = useState('');
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onFilterChange({ query, from, to });
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      display="flex"
      flexWrap="wrap"
      gap={2}
      mb={2}
    >
      <TextField
        label="Keyword"
        variant="outlined"
        size="small"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <TextField
        label="From"
        type="date"
        variant="outlined"
        size="small"
        value={from}
        onChange={(e) => setFrom(e.target.value)}
        InputLabelProps={{ shrink: true }}
      />
      <TextField
        label="To"
        type="date"
        variant="outlined"
        size="small"
        value={to}
        onChange={(e) => setTo(e.target.value)}
        InputLabelProps={{ shrink: true }}
      />
      <Button type="submit" variant="contained" color="primary">
        Filter
      </Button>
    </Box>
  );
}
