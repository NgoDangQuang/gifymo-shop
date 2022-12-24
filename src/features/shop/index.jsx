import { makeStyles } from '@material-ui/core';
import { rootData } from 'api/rootData';
// import { listFeatureItems } from 'api';
import { CONTAINER } from 'constants/styles';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCategoriesData, getCommentsData, getProductsData } from '../../redux/getData';
import { useGetAllDataQuery } from '../../service/getFullData';
import bgBody from './../../asset/img/bg-body.jpg';
import ShowListProductByType from './content/ShowListProductByType';
import { SidebarShop } from './sidebar';
import BasicBreadcrumbs from './sidebar/Breadcrumbs';

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
export function Shop(props) {
  const classes = useStyles();
  // const dataCategories = useGetAllDataQuery('categories');
  // const dataProducts = useGetAllDataQuery('products');
  // const dataComments = useGetAllDataQuery('comments');

  const dataCategories = rootData.categories
  const dataProducts =rootData.products
  const dataComments =rootData.comments
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategoriesData(dataCategories));
    dispatch(getProductsData(dataProducts));
    dispatch(getCommentsData(dataComments));
    // dispatch(getCategoriesData(dataCategories.data));
    // dispatch(getProductsData(dataProducts.data));
    // dispatch(getCommentsData(dataComments.data));
  });
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div>
          <BasicBreadcrumbs />
        </div>
        <div className={classes.layout}>
          <div className={classes.sidebar}>
            <SidebarShop />
          </div>
          <div className={classes.content}>
            <ShowListProductByType />
          </div>
        </div>
      </div>
    </div>
  );
}
