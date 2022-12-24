import { Box } from '@mui/material';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import { rootData } from 'api/rootData';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  getCommentById,
  getDescriptionById,
  getProductDetail,
  getProductsData,
} from 'redux/getData';
import { useGetAllDataQuery } from 'service/getFullData';
import ProductItems from './ProductItems';
import RelatedProducts from './RelatedProducts';
import Section2 from './Section2';
import './styles.css';

export default function Product({ id }) {
  const dispatch = useDispatch();
  // const getProductsList = useGetAllDataQuery('products');
  // const getProductDetailsData = useGetAllDataQuery(`products/${id}`);
  // const dataCommentById = useGetAllDataQuery(`comments?productId=${id}`);
  // const dataDescriptionById = useGetAllDataQuery(`descriptions?productId=${id}`);

  const getProductsList = rootData.products
  const getProductDetailsData = rootData.products.filter(product=>product.id===id)
  const dataCommentById =rootData.comments.filter(comment=>comment.productId===id)
  const dataDescriptionById = rootData.descriptions.filter(comment=>comment.productId===id)

  useEffect(() => {
    dispatch(getProductsData(getProductsList));
    dispatch(getCommentById(dataCommentById));
    dispatch(getDescriptionById(dataDescriptionById));
    dispatch(getProductDetail(getProductDetailsData[0]));
    // dispatch(getProductsData(getProductsList.data));
    // dispatch(getCommentById(dataCommentById.data));
    // dispatch(getDescriptionById(dataDescriptionById.data));
    // dispatch(getProductDetail(getProductDetailsData.data));
  },[]);

  const { productDetail, products, commentById } = useSelector((state) => state.getData);

  let dataRelatedProduct = [];
  if (products) {
    const numProducts = products?.length;
    dataRelatedProduct = [
      products[Math.floor(Math.random() * numProducts)],
      products[Math.floor(Math.random() * numProducts)],
      products[Math.floor(Math.random() * numProducts)],
      products[Math.floor(Math.random() * numProducts)],
    ];
  }
  return (
    <div className="layout-product-items">
      <div className="container">
        <Box mt={2} mb={2}>
          <Breadcrumbs aria-label="breadcrumb" className="breadcrums">
            <Link to="/gifymo-shop">Gifymo</Link>
            <Link to="/gifymo-shop/shop">Product</Link>
            <Typography color="text.primary">{productDetail?.name}</Typography>
          </Breadcrumbs>
        </Box>

        <Box mb={2}>
          <ProductItems dataReview={commentById} />
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
          {dataRelatedProduct !== [] && <RelatedProducts data={dataRelatedProduct} />}
        </Box>
      </div>
    </div>
  );
}
