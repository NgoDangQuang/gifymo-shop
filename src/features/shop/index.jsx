import { makeStyles } from '@material-ui/core';
import { listFeatureItems } from 'api';
import { ReviewProducts } from 'api/ReviewProducts';
import { CONTAINER } from 'constants/styles';
import { useEffect } from 'react';
import { useState } from 'react';
import { FilterProductByType } from 'utils/FilterProductbyType';
import { MinMaxPrice } from 'utils/HandlePrice';
import { handleChooseFunction } from 'utils/Sort';
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
  const [typeProduct, setTypeProduct] = useState('');
  const [sortItems, setSortItems] = useState('');
  const [minPrice, maxPrice] = MinMaxPrice(listFeatureItems);
  const [filterMinPrice, setFilterMinPrice] = useState(minPrice);
  const [filterMaxPrice, setFilterMaxPrice] = useState(maxPrice);
  const ListFeatureByType = FilterProductByType(
    listFeatureItems,
    typeProduct,
    filterMinPrice,
    filterMaxPrice
  );
  const dataRecentReviews = ReviewProducts;

  const dataSort = handleChooseFunction(sortItems, ListFeatureByType);
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  });
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div>
          <BasicBreadcrumbs />
        </div>
        <div className={classes.layout}>
          <div className={classes.sidebar}>
            <SidebarShop
              setTypeProduct={setTypeProduct}
              minPrice={minPrice}
              maxPrice={maxPrice}
              filterMinPrice={filterMinPrice}
              setFilterMinPrice={setFilterMinPrice}
              filterMaxPrice={filterMaxPrice}
              setFilterMaxPrice={setFilterMaxPrice}
              dataRecentReviews={dataRecentReviews}
            />
          </div>
          <div className={classes.content}>
            <ShowListProductByType
              data={dataSort}
              sortItems={sortItems}
              setSortItems={setSortItems}
              typeProduct={typeProduct}
              setTypeProduct={setTypeProduct}
              filterMinPrice={filterMinPrice}
              setFilterMinPrice={setFilterMinPrice}
              filterMaxPrice={filterMaxPrice}
              setFilterMaxPrice={setFilterMaxPrice}
              minPrice={minPrice}
              maxPrice={maxPrice}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
