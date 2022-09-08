import { Box, Grid } from '@mui/material';
import Item from 'features/home/content/section3/items';
import './styles.css';

function RelatedProduct({ data }) {
  return (
    <Box className="">
      <Box mb={5} mt={3}>
        <div className="layout-feature-items__title flex j-center">
          <h4>Related Products</h4>
        </div>
      </Box>
      <Box className="layout-feature-items__box-items">
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {data.map((item, index) => (
            <Grid item xs={6} sm={4} md={3} key={index}>
              <Item data={item} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

export default RelatedProduct;
