import React from 'react';

import classes from './Score.module.css';

const Score = (props) => {
  return (
    <li className={classes.score}>
      <h2>{props.title}</h2>
      <h3>{props.date}</h3>
    </li>
  );
};

export default Score;
