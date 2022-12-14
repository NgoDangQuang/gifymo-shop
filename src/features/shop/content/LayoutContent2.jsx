import { Box } from '@mui/material';
import NoData from 'component/NoData';
import LayoutItem2 from './LayoutItem2';
import './styles.css';

function LayoutContent2(props) {
  const { currentPage, ItemsInPage, data } = props;

  return (
    <Box className="layout-content-2-fix-height">
      {data.length === 0 && <NoData />}
      {data?.map(
        (item, index) =>
          index + 1 > (currentPage - 1) * ItemsInPage &&
          index + 1 <= currentPage * ItemsInPage && <LayoutItem2 data={item} key={index} />
      )}
    </Box>
  );
}

export default LayoutContent2;
