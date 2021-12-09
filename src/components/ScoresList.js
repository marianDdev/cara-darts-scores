import React from 'react';

import Score from './Score';
import classes from './ScoresList.module.css';

const ScoresList = (props) => {
  return (
    <ul className={classes['scores-list']}>
      {props.scores.map((score) => (
        <Score key={score.id} title={score.amount} date={score.date} />
      ))}
    </ul>
  );
};

export default ScoresList;
