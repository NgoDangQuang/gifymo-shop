import { Box } from '@mui/material';
import { TypeProduct } from 'api';
import { GAP } from 'constants/styles';
import FilterByPrice from './FilterByPrice';
import ProductCategories from './ProductCategories';
import RecentReviews from './RecentReviews';

export function SidebarShop(props) {
  const {
    minPrice,
    maxPrice,
    setTypeProduct,
    filterMinPrice,
    filterMaxPrice,
    setFilterMinPrice,
    setFilterMaxPrice,
    dataRecentReviews,
  } = props;

  const data = TypeProduct;
  return (
    <Box>
      <Box mb={GAP}>
        <ProductCategories data={data} setTypeProduct={setTypeProduct} />
      </Box>
      <Box mb={GAP}>
        <FilterByPrice
          minPrice={minPrice}
          maxPrice={maxPrice}
          filterMinPrice={filterMinPrice}
          filterMaxPrice={filterMaxPrice}
          setFilterMinPrice={setFilterMinPrice}
          setFilterMaxPrice={setFilterMaxPrice}
        />
      </Box>
      <Box>
        <RecentReviews dataRecentReviews={dataRecentReviews} />
      </Box>
    </Box>
  );
}
