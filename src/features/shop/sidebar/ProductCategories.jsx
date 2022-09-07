import { Box } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

function ProductCategories(props) {
  const { data, setTypeProduct } = props;
  const handleTypeProduct = (item) => {
    setTypeProduct(item);
  };
  return (
    <Box className="layout-product-categories">
      <h2 className="style__general">Product categories</h2>
      {data.map((item, idx) => (
        <div className="product-categories__Item style__general" key={idx}>
          <Link to="/gifymo-shop/shop" onClick={() => handleTypeProduct(item)}>
            <li>{item}</li>
          </Link>
        </div>
      ))}
    </Box>
  );
}

export default ProductCategories;
