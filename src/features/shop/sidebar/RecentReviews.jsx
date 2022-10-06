import { Box, Rating } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setRecentReviews } from 'redux/getData';
import { filterComment } from 'utils/FilterComment';
import './styles.css';

function RecentReviews(props) {
  const { comments, products, recentReviews } = useSelector((state) => state.getData);
  const dispatch = useDispatch();

  useEffect(() => {
    const recentReview = filterComment(comments, products);
    dispatch(setRecentReviews(recentReview));
  }, [comments, products, dispatch]);

  return (
    <Box className="layout-recent-reviews">
      <h2 className="style__general">Recent reviews</h2>
      {!recentReviews && <h4>Loading...</h4>}
      {recentReviews?.map(
        (item, idx) =>
          idx + 1 <= 5 && (
            <div className="layout-recent-reviews__item flex style__general" key={idx}>
              <div className="image-review-product">
                <Link to={`/gifymo-shop/product/${item.idProducts}`}>
                  <img src={item?.img} alt="product" />
                </Link>
              </div>
              <div className="content-review-product">
                <Link to={`/gifymo-shop/product/${item.idProducts}`}>
                  <h3>{item?.name}</h3>
                </Link>
                <Rating name="half-rating-read" value={item?.star} precision={0.5} readOnly />
                <h4>by {item?.creator}</h4>
              </div>
            </div>
          )
      )}
    </Box>
  );
}

export default RecentReviews;
