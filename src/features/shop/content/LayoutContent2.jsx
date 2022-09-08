import { Box } from '@mui/material';
import NoData from 'component/NoData';
import LayoutItem2 from './LayoutItem2';
import './styles.css';

function LayoutContent2(props) {
  const { data, currentPage, ItemsInPage } = props;
  if (data.length === 0) return <NoData />;
  return (
    <Box className="layout-content-2-fix-height">
      {data.map(
        (item, index) =>
          index + 1 > (currentPage - 1) * ItemsInPage &&
          index + 1 <= currentPage * ItemsInPage && <LayoutItem2 data={item} />
      )}
    </Box>
  );
}

export default LayoutContent2;
