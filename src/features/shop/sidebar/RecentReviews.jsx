import { Box, Rating } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

function RecentReviews(props) {
  const { dataRecentReviews } = props;

  return (
    <Box className="layout-recent-reviews">
      <h2 className="style__general">Recent reviews</h2>
      {dataRecentReviews.map(
        (item, idx) =>
          idx + 1 <= 5 && (
            <div className="layout-recent-reviews__item flex style__general" key={idx}>
              <div className="image-review-product">
                <Link to="/gifymo-shop/shop">
                  <img src={item.avt} alt="product" />
                </Link>
              </div>
              <div className="content-review-product">
                <Link to='/gifymo-shop/product'>
                  <h3>{item.productName}</h3>
                </Link>
                <Rating name="half-rating-read" defaultValue={item.star} precision={0.5} readOnly />
                <h4>by {item.poster}</h4>
              </div>
            </div>
          )
      )}
    </Box>
  );
}

export default RecentReviews;
