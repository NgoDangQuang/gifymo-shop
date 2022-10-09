import { Box } from '@mui/material';
import Loading from 'component/Loading';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setTypeCategory } from './../../../redux/getData';
import './styles.css';

function ProductCategories(props) {
  const { categories } = useSelector((state) => state.getData);
  const dispatch = useDispatch();

  const handleCategoryType = (item) => {
    dispatch(setTypeCategory(item));
  };

  return (
    <Box className="layout-product-categories">
      <h2 className="style__general">Product categories</h2>
      {!categories && <Loading />}
      {categories?.map((item) => (
        <div className="product-categories__Item style__general" key={item?.id}>
          <Link to="/gifymo-shop/shop" onClick={() => handleCategoryType(item?.name)}>
            <li>{item?.name}</li>
          </Link>
        </div>
      ))}
    </Box>
  );
}

export default ProductCategories;
