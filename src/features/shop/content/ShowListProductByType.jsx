import { Box } from '@mui/material';
import LayoutContent1 from './LayoutContent1';

function ShowListProductByType(props) {
  const {
    data,
    setSortItems,
    sortItems,
    typeProduct,
    setTypeProduct,
    filterMinPrice,
    setFilterMinPrice,
    filterMaxPrice,
    setFilterMaxPrice,
    minPrice,
    maxPrice,
  } = props;

  return (
    <Box>
      <Box>
        <LayoutContent1
          data={data}
          setSortItems={setSortItems}
          sortItems={sortItems}
          typeProduct={typeProduct}
          setTypeProduct={setTypeProduct}
          filterMinPrice={filterMinPrice}
          setFilterMinPrice={setFilterMinPrice}
          filterMaxPrice={filterMaxPrice}
          setFilterMaxPrice={setFilterMaxPrice}
          minPrice={minPrice}
          maxPrice={maxPrice}
        />
      </Box>
    </Box>
  );
}

export default ShowListProductByType;
