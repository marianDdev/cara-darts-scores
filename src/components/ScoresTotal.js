import React from 'react';

import classes from './Score.module.css';

const ScoresTotal = (props) => {
  return (
    <li className={classes.score}>
      <h2>Your sum of scores</h2>
      <h2>{props.amount}</h2>
    </li>
  );
};

export default ScoresTotal;
