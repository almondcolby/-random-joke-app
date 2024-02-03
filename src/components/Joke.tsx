import Setup from './Setup';
import PunchLine from './PunchLine';
import { useJoke } from '../JokeContext';
import React from 'react';

import {
  Button,
  Card,
  CardContent,
  Typography,
  CircularProgress,
  Link,
} from '@mui/material';

interface JokeData {
  joke: string;
  punchLine: string;
  id: number;
}

const Joke: React.FC = () => {
  const { jokeData, setJokeData, setShowPunchLine } = useJoke();
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<boolean>(false);

  const fetchJoke = async () => {
    setIsLoading(true);
    setError(false);

    try {
      const response = await fetch('/api/joke/random');

      if (!response.ok)
        throw new Error('THERE WAS AN ERROR LOADING YOUR JOKE.');

      const data: JokeData = await response.json();

      setJokeData({
        joke: data.joke,
        punchLine: data.punchLine,
        id: data.id,
      });
    } catch (error) {
      setError(true);
    } finally {
      setIsLoading(false);
      setShowPunchLine(false);
    }
  };

  React.useEffect(() => {
    fetchJoke();
  }, []);

  if (isLoading)
    return (
      <Card sx={{ margin: 'auto', textAlign: 'center' }}>
        <CircularProgress />
      </Card>
    );
  if (error)
    return (
      <Typography sx={{ color: 'red', textAlign: 'center', marginTop: '48px' }}>
        THERE WAS AN ERROR LOADING YOUR JOKE.
      </Typography>
    );

  return (
    <>
      <Card
        sx={{
          minWidth: 320,
          margin: '20px auto',
          padding: '20px',
          width: '100%',
          display: 'flex',
          justifyContent: 'space-evenly',
        }}
      >
        <CardContent key={jokeData.id}>
          <Button onClick={fetchJoke} sx={{ justifyContent: 'flex-start' }}>
            Get A New Random Joke
          </Button>
          <Link href="/api/joke/random" target="_blank">
            View API Docs
          </Link>
        </CardContent>
      </Card>
      <Setup setupText={jokeData.joke} />
      <PunchLine punchlineText={jokeData.punchLine} />
    </>
  );
};

export default Joke;
