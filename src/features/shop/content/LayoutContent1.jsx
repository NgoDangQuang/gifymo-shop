import { Box, Grid } from '@mui/material';
import NoData from 'component/NoData';
import Item from 'features/home/content/section3/items';
import './styles.css';

function LayoutContent1(props) {
  const { data } = props;
  if (data.length === 0) return <NoData />;
  return (
    <Box className="layout-feature-items">
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {data.map((item, index) => (
          <Grid item xs={6} sm={4} md={3} key={index}>
            <Item data={item} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default LayoutContent1;
