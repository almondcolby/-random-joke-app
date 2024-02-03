import { useJoke } from '../JokeContext';

import React from 'react';
import { Typography, Button, Card, CardContent } from '@mui/material';

interface PunchLineProps {
  punchlineText: string;
}

const PunchLine: React.FC<PunchLineProps> = ({ punchlineText }) => {
  const { showPunchLine, setShowPunchLine } = useJoke();
  const handleToggleShowPunchLine = () => setShowPunchLine(!showPunchLine);

  return (
    <>
      <Card sx={{ textAlign: 'center' }}>
        <CardContent>
          {showPunchLine && (
            <Typography sx={{ fontSize: '36px', fontStyle: 'italic' }}>
              {punchlineText}
            </Typography>
          )}
        </CardContent>
      </Card>
      <Card sx={{ textAlign: 'center' }}>
        <CardContent>
          <Button onClick={handleToggleShowPunchLine}>
            {showPunchLine ? 'Hide Punchline' : 'Show Punchline'}
          </Button>
        </CardContent>
      </Card>
    </>
  );
};

export default PunchLine;
