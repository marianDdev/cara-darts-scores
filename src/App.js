import React, { useState, useEffect, useCallback } from 'react';

import ScoresData from './components/ScoresData';
import AddScore from './components/AddScore';
import './App.css';

function App() {
  const [scores, setscores] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const addScoreHandler = useCallback(async (score) => {
    setIsLoading(true);
    setError(null);
    await fetch(
      'https://cara-darts-scores-default-rtdb.firebaseio.com/scores.json',
      {
        method: 'POST',
        body: JSON.stringify(score),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    const GETresponse = await fetch(
      'https://cara-darts-scores-default-rtdb.firebaseio.com/scores.json'
    );

    const data = await GETresponse.json();
    const loadedScores = [];
    for (const key in data) {
      loadedScores.push({
        id: key,
        amount: data[key].amount,
        date: data[key].date,
      });
    }

    setscores(loadedScores);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    addScoreHandler();
  }, [addScoreHandler]);

  let content = <p>Found no scores.</p>;

  if (scores.length > 0) {
    content = <ScoresData scores={scores} />;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  return (
    <React.Fragment>
      <section>
        <AddScore onAddScore={addScoreHandler} />
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
