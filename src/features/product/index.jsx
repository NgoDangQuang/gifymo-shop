import { Box } from '@mui/material';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import { CustomerReviews } from 'api/ProductItems';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCommentById, getDescriptionById } from 'redux/getData';
import { useGetAllDataQuery } from 'service/getFullData';
import ProductItems from './ProductItems';
import RelatedProducts from './RelatedProducts';
import Section2 from './Section2';
import './styles.css';

export default function Product({ data, id }) {
  const { products } = useSelector((state) => state.getData);

  const dataReview = CustomerReviews;
  const dataRelatedProduct = [
    products[Math.ceil(Math.random() * 20)],
    products[Math.ceil(Math.random() * 20)],
    products[Math.ceil(Math.random() * 20)],
    products[Math.ceil(Math.random() * 20)],
  ];

  const dispatch = useDispatch();
  const dataCommentById = useGetAllDataQuery(`comments?productId=${data.id}`);
  const dataDescriptionById = useGetAllDataQuery(`descriptions?productId=${data.id}`);

  useEffect(() => {
    dispatch(getCommentById(dataCommentById.data));
    dispatch(getDescriptionById(dataDescriptionById.data));
    window.scrollTo({
      top: 0,
    });
  });
  return (
    <div className="layout-product-items">
      <div className="container">
        <Box mt={2} mb={2}>
          <Breadcrumbs aria-label="breadcrumb" className="breadcrums">
            <Link to="/gifymo-shop">Gifymo</Link>
            <Link to="/gifymo-shop/shop">Product</Link>
            <Typography color="text.primary">{data.name}</Typography>
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
            <Section2 />
          </Box>
        </Box>

        <Box mb={5} pb={10} sx={{ borderBottom: '1px solid gray' }}>
          <RelatedProducts data={dataRelatedProduct} />
        </Box>
      </div>
    </div>
  );
}
