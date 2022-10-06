import { Box } from '@mui/material';
import { GAP } from 'constants/styles';
import FilterByPrice from './FilterByPrice';
import ProductCategories from './ProductCategories';
import RecentReviews from './RecentReviews';

export function SidebarShop(props) {
  return (
    <Box>
      <Box mb={GAP}>
        <ProductCategories />
      </Box>
      <Box mb={GAP}>
        <FilterByPrice />
      </Box>
      <Box>
        <RecentReviews />
      </Box>
    </Box>
  );
}
