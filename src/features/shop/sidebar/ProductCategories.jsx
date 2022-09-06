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
      <Box className="sectionOne__Layout">
        {data.map((item, idx) => (
          <div className="sectionOne__Item style__general" key={idx}>
            <Link to="/gifymo-shop/shop" onClick={() => handleTypeProduct(item)}>
              {item}
            </Link>
          </div>
        ))}
      </Box>
    </Box>
  );
}

export default ProductCategories;
