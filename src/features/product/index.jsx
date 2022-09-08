import { Box } from '@mui/material';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import { CustomerReviews, ProductItemsData } from 'api/ProductItems';
import { Link } from 'react-router-dom';
import ProductItems from './ProductItems';
import './styles.css';

export default function Product() {
  const data = ProductItemsData;
  const { nameItem } = data;

  const dataReview = CustomerReviews;
  return (
    <div className="layout-product-items">
      <div className="container">
        <Box mt={2} mb={2}>
          <Breadcrumbs aria-label="breadcrumb" className="breadcrums">
            <Link to="/gifymo-shop">Gifymo</Link>
            <Link to="/gifymo-shop/shop">Product</Link>
            <Typography color="text.primary">{nameItem}</Typography>
          </Breadcrumbs>
        </Box>

        <Box mb={2}>
          <ProductItems data={data} dataReview={dataReview} />
        </Box>
      </div>
    </div>
  );
}
