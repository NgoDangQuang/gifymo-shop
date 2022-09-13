import { makeStyles } from '@material-ui/core';
import { TypeProduct } from 'api';
import { CONTAINER } from 'constants/styles';
import { useEffect } from 'react';
import bgBody from './../../asset/img/bg-body.jpg';
import ContentHomePage from './content';

import { Sidebar } from './sidebar';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#f8f8f8',
    backgroundImage: `url(${bgBody})`,
    backgroundPosition: 'top center',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    justifyContent: 'center',
  },
  container: {
    width: CONTAINER,
  },
  layout: {
    padding: '30px 0px',
    display: 'flex',
    width: '100%',
  },
  sidebar: {
    width: '25%',
  },
  content: {
    marginLeft: '20px',
    width: '75%',
  },
}));

const ListTypeProduct = TypeProduct;

export function Home(props) {
  const classes = useStyles();
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  });
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.layout}>
          <div className={classes.sidebar}>
            <Sidebar typeOfProduct={ListTypeProduct} />
          </div>
          <div className={classes.content}>
            <ContentHomePage />
          </div>
        </div>
      </div>
    </div>
  );
}
