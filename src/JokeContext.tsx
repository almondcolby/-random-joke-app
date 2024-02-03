import React from 'react';

interface JokeContextType {
  jokeData: any;
  setJokeData: React.Dispatch<
    React.SetStateAction<{
      joke: string;
      punchLine: string;
      id: number;
    }>
  >;
  showPunchLine: boolean;
  setShowPunchLine: React.Dispatch<React.SetStateAction<boolean>>;
}

const JokeContext = React.createContext<JokeContextType | undefined>(undefined);

export const JokeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [jokeData, setJokeData] = React.useState<{}>({});
  const [showPunchLine, setShowPunchLine] = React.useState<boolean>(false);

  return (
    <JokeContext.Provider
      value={{ jokeData, setJokeData, showPunchLine, setShowPunchLine }}
    >
      {children}
    </JokeContext.Provider>
  );
};

export const useJoke = () => {
  const appContext = React.useContext(JokeContext);

  if (appContext === undefined) {
    throw new Error('useJoke must be used with JokeProvider');
  }

  return appContext;
};
