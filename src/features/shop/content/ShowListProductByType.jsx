import { Box } from '@mui/material';
import LayoutContent1 from './LayoutContent1';

function ShowListProductByType(props) {
  const { data } = props;

  return (
    <Box>
      <Box>
        <LayoutContent1 data={data} />
      </Box>
    </Box>
  );
}

export default ShowListProductByType;
