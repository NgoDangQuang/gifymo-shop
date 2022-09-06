import { Box, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import cat01 from './../../../../asset/img/cat01.jpg';
import cat02 from './../../../../asset/img/cat02.jpg';
import cat03 from './../../../../asset/img/cat03.jpg';
import cat04 from './../../../../asset/img/cat04.jpg';
import './styles.css';

function Section5(props) {
  return (
    <Box className="layout-feature-items">
      <Box mb={5} mt={3}>
        <div className="layout-feature-items__title flex j-center">
          <h4>Gift kits & baskets</h4>
        </div>
      </Box>
      <Box className="layout-feature-items__box-items">
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid item xs={6} sm={4} md={3}>
            <div className="item-sub-content">
              <Link to="/gifymo-shop/shop">
                <img src={cat01} alt="" />
                <h4>For Him</h4>
                <h5 className="item-sub-content__h5">6 items</h5>
              </Link>
            </div>
          </Grid>
          <Grid item xs={6} sm={4} md={3}>
            <div className="item-sub-content">
              <Link to="/gifymo-shop/shop">
                <img src={cat02} alt="" />
                <h4>For Baby</h4>
                <h5 className="item-sub-content__h5">7 items</h5>
              </Link>
            </div>
          </Grid>
          <Grid item xs={6} sm={4} md={3}>
            <div className="item-sub-content">
              <Link to="/gifymo-shop/shop">
                <img src={cat03} alt="" />
                <h4>Occasions</h4>
                <h5 className="item-sub-content__h5">3 items</h5>
              </Link>
            </div>
          </Grid>
          <Grid item xs={6} sm={4} md={3}>
            <div className="item-sub-content">
              <Link to="/gifymo-shop/shop">
                <img src={cat04} alt="" />
                <h4>For Her</h4>
                <h5 className="item-sub-content__h5">8 items</h5>
              </Link>
            </div>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default Section5;
