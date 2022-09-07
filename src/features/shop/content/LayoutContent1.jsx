import { Box, Grid, Pagination } from '@mui/material';
import NoData from 'component/NoData';
import Item from 'features/home/content/section3/items';
import { useEffect, useState } from 'react';
import SortSelect from './SortSelect';
import './styles.css';

function LayoutContent1(props) {
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
  const [currentPage, setCurrentPage] = useState(1);

  const ItemsInPage = 16;
  const countPage = Math.ceil(data.length / ItemsInPage);
  const handleChangePage = (e, value) => {
    setCurrentPage(value);
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [filterMinPrice, filterMaxPrice, typeProduct]);
  
  if (data.length === 0) return <NoData />;
  return (
    <Box className="layout-feature-items">
      <Box className="layout-feature-items__sort">
        <SortSelect
          setSortItems={setSortItems}
          sortItems={sortItems}
          length={data.length}
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
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {data.map(
          (item, index) =>
            index + 1 > (currentPage - 1) * ItemsInPage &&
            index + 1 <= currentPage * ItemsInPage && (
              <Grid item xs={6} sm={4} md={3} key={index}>
                <Item data={item} />
              </Grid>
            )
        )}
      </Grid>
      <Pagination
        count={countPage}
        page={currentPage}
        variant="outlined"
        onChange={handleChangePage}
        sx={{ padding: '20px 0px', display: 'flex', justifyContent: 'center' }}
      />
    </Box>
  );
}

export default LayoutContent1;
