import { Box, Grid } from '@mui/material';
import { listFeatureItems } from 'api';
import Item from './items';
import './styles.css';

function FeatureItems(props) {
  return (
    <Box className="layout-feature-items">
      <Box mb={5} mt={3}>
        <div className="layout-feature-items__title flex j-center">
          <h4>Feature items</h4>
        </div>
      </Box>
      <Box className="layout-feature-items__box-items">
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {listFeatureItems.map(
            (item, index) =>
              index + 1 <= 8 && (
                <Grid item xs={6} sm={4} md={3} key={index}>
                  <Item data={item} />
                </Grid>
              )
          )}
        </Grid>
      </Box>
    </Box>
  );
}

export default FeatureItems;
