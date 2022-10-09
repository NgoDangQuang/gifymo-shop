import { Box } from '@mui/material';
import Loading from 'component/Loading';
import PaginationLayout from 'component/Pagination';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { FilterProductByType } from 'utils/FilterProductbyType';
import { handleChooseFunction } from 'utils/Sort';
import LayoutContent1 from './LayoutContent1';
import LayoutContent2 from './LayoutContent2';
import SortSelect from './SortSelect';

function ShowListProductByType(props) {
  const [currentPage, setCurrentPage] = useState(1);
  const [valueInput, setValueInput] = useState('');
  const ItemsInPage = 16;
  const { layoutShowItems, products, sortBy, typeCategory, setPrice, categories } = useSelector(
    (state) => state.getData
  );

  const [sort, setSort] = useState(sortBy);
  const dataFilterByType = FilterProductByType(
    products,
    categories,
    typeCategory,
    setPrice[0],
    setPrice[1],
    valueInput
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [typeCategory, setPrice]);

  const data = handleChooseFunction(sort, dataFilterByType);
  const pages = Math.ceil(data.length / ItemsInPage);

  return (
    <Box className="layout-show-feature-items-shop-page">
      <Box className="layout-feature-items__sort">
        <SortSelect
          data={data}
          sort={sort}
          setSort={setSort}
          setValueInput={setValueInput}
          valueInput={valueInput}
        />
      </Box>
      <Box>
        {!products && <Loading />}
        {products &&
          ((layoutShowItems === 1 && (
            <LayoutContent1 data={data} currentPage={currentPage} ItemsInPage={ItemsInPage} />
          )) ||
            (layoutShowItems === 2 && (
              <LayoutContent2 data={data} currentPage={currentPage} ItemsInPage={ItemsInPage} />
            )))}
      </Box>
      <PaginationLayout
        countPage={pages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </Box>
  );
}

export default ShowListProductByType;
