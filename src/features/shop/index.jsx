import { makeStyles } from '@material-ui/core';
import { listFeatureItems } from 'api';
import { CONTAINER } from 'constants/styles';
import { useState } from 'react';
import { MinMaxPrice } from 'utils/HandlePrice';
import bgBody from './../../asset/img/bg-body.jpg';
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
  const [minPrice, maxPrice] = MinMaxPrice(listFeatureItems);
  const [filterMinPrice, setFilterMinPrice] = useState(minPrice);
  const [filterMaxPrice, setFilterMaxPrice] = useState(maxPrice);

  console.log("min", filterMinPrice)
  console.log("max", filterMaxPrice)
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
            />
          </div>
          <div className={classes.content}>Content {typeProduct}</div>
        </div>
      </div>
    </div>
  );
}
