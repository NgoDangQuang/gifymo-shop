import { Box } from '@mui/material';
import NoData from 'component/NoData';
import PaginationLayout from 'component/Pagination';
import { useEffect, useState } from 'react';
import LayoutContent1 from './LayoutContent1';
import LayoutContent2 from './LayoutContent2';
import SortSelect from './SortSelect';

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

  const [currentPage, setCurrentPage] = useState(1);
  const [layoutShowItems, setLayoutShowItems] = useState(1);

  useEffect(() => {
    setCurrentPage(1);
  }, [filterMinPrice, filterMaxPrice, typeProduct]);

  const ItemsInPage = 16;
  const countPage = Math.ceil(data.length / ItemsInPage);
  return (
    <Box className="layout-show-feature-items-shop-page">
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
          layoutShowItems={layoutShowItems}
          setLayoutShowItems={setLayoutShowItems}
        />
      </Box>
      <Box>
        {(data.length === 0 && <NoData />) ||
          (layoutShowItems === 1 && (
            <LayoutContent1 data={data} currentPage={currentPage} ItemsInPage={ItemsInPage} />
          )) ||
          (layoutShowItems === 2 && (
            <LayoutContent2 data={data} currentPage={currentPage} ItemsInPage={ItemsInPage} />
          ))}
      </Box>
      <PaginationLayout
        countPage={countPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </Box>
  );
}

export default ShowListProductByType;
