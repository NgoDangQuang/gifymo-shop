import { makeStyles } from '@material-ui/core';
import { TypeProduct } from 'api';
import { CONTAINER } from 'constants/styles';
import bgBody from './../../asset/img/bg-body.jpg'

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
    width: CONTAINER
  },
  layout: {
    padding: '30px 0px',
    display: 'grid',
    gridTemplateRows: 'auto 1fr',
    gridTemplateColumns: '350px 1fr',
    gridTemplateAreas: `"sidebar content"`,
  },
  sidebar: {
    gridArea: 'sidebar',
  },
  content: {
    marginLeft: '20px',
    gridArea: 'content',
    background: 'wheat',
  }
}));

const ListTypeProduct = TypeProduct

export function Home(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.layout}>
          <div className={classes.sidebar}>
            <Sidebar typeOfProduct={ListTypeProduct} />
          </div>
          <div className={classes.content}>
            <h2>Content</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
