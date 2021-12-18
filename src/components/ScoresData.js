import React from 'react';

import LastScore from './LastScore';
import ScoresTotal from './ScoresTotal';
import AverageScore from './AverageScore';
import classes from './ScoresList.module.css';

const ScoresData = (props) => {
  const scores = props.scores;
  let scoresSum = scores.reduce((a, b) => +a + +b.amount, 0);
  const averageScore = (scoresSum / scores.length).toFixed(2);
  const lastScore = scores[scores.length - 1];

  return (
    <ul className={classes['scores-list']}>
      {
        <>
          <LastScore
            key={lastScore.id}
            amount={lastScore.amount}
            date={lastScore.date}
          />
          <ScoresTotal amount={scoresSum} />
          <AverageScore amount={averageScore} />
        </>
      }
    </ul>
  );
};

export default ScoresData;
