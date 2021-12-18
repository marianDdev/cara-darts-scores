import React from 'react';

import classes from './Score.module.css';

const ScoresTotal = (props) => {
  return (
    <li className={classes.score}>
      <h2>Total of scores</h2>
      <h2>{props.title}</h2>
    </li>
  );
};

export default ScoresTotal;
