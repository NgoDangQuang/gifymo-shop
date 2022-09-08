import { Box } from '@mui/material';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import { listFeatureItems } from 'api';
import { CustomerReviews, ProductItemsData } from 'api/ProductItems';
import { Link } from 'react-router-dom';
import ProductItems from './ProductItems';
import RelatedProducts from './RelatedProducts';
import Section2 from './Section2';
import './styles.css';

export default function Product() {
  const data = ProductItemsData;
  const { nameItem } = data;

  const dataReview = CustomerReviews;

  const dataRelatedProduct = [
    listFeatureItems[Math.ceil(Math.random() * 20)],
    listFeatureItems[Math.ceil(Math.random() * 20)],
    listFeatureItems[Math.ceil(Math.random() * 20)],
    listFeatureItems[Math.ceil(Math.random() * 20)],
  ];
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

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            borderBottom: '1px solid gray',
            paddingBottom: '20px',
            marginBottom: '40px',
          }}
          mb={2}
        >
          <Box sx={{ width: '950px' }}>
            <Section2 dataReview={dataReview} />
          </Box>
        </Box>

        <Box mb={5}>
          <RelatedProducts data={dataRelatedProduct} />
        </Box>
      </div>
    </div>
  );
}
