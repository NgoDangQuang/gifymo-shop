import { makeStyles } from '@material-ui/core';
import { TypeProduct } from 'api';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '1000px',
    backgroundColor: '#f8f8f8',
    backgroundImage: 'url(http://demo2.themelexus.com/gifymo/wp-content/uploads/2021/05/bg-body.jpg)',
    backgroundPosition: 'top center',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

const ListTypeProduct = TypeProduct

export function Home(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div>HOME PAGE</div>
    </div>
  );
}
