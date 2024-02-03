import React from 'react';
import { CssBaseline, Container } from '@mui/material';

import { JokeProvider } from './JokeContext';
import Joke from './components/Joke';

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container>
        <JokeProvider>
          <Joke />
        </JokeProvider>
      </Container>
    </React.Fragment>
  );
}

export default App;
