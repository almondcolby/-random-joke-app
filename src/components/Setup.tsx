import React from 'react';
import { Typography, Card, CardContent } from '@mui/material';

interface SetupProps {
  setupText: string;
}

const Setup: React.FC<SetupProps> = ({ setupText }) => {
  return (
    <Card sx={{ textAlign: 'center' }}>
      <CardContent>
        <Typography sx={{ fontSize: '24px' }}>{setupText}</Typography>
      </CardContent>
    </Card>
  );
};

export default Setup;
