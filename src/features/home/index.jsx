import { makeStyles } from '@material-ui/core';
import { CONTAINER } from 'constants/styles';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCategoriesData, getProductsData } from '../../redux/getData';
import { useGetAllDataQuery } from '../../service/getFullData';
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

export function Home(props) {
  const classes = useStyles();
  const dataCategories = useGetAllDataQuery('categories');
  const dataProducts = useGetAllDataQuery('products');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategoriesData(dataCategories.data));
    dispatch(getProductsData(dataProducts.data));
    window.scrollTo({
      top: 0,
    });
  });
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.layout}>
          <div className={classes.sidebar}>
            <Sidebar />
          </div>
          <div className={classes.content}>
            <ContentHomePage />
          </div>
        </div>
      </div>
    </div>
  );
}
