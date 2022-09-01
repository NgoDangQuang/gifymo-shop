import { makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '500px',
    background: 'pink',
    display:'flex',
    alignItems:'center',
    justifyContent:'center'
  },
}));

export function Content(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div>CONTENT HERE</div>
    </div>
  );
}
