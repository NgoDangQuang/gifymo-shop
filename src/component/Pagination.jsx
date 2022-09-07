import { Pagination } from '@mui/material';
import React from 'react';

function PaginationLayout(props) {
  const { countPage, currentPage, setCurrentPage } = props;
  const handleChangePage = (e, value) => {
    setCurrentPage(value);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <Pagination
      count={countPage}
      page={currentPage}
      variant="outlined"
      onChange={handleChangePage}
      sx={{ padding: '20px 0px', display: 'flex', justifyContent: 'center' }}
    />
  );
}

export default PaginationLayout;
