import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareRoundedIcon from '@mui/icons-material/ShareRounded';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import { Box, Rating } from '@mui/material';
import { Link } from 'react-router-dom';

function Item(props) {
  const { data } = props;
  const { price, discounts, name, image, star, id } = data;
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Box className="layout-items-main" onClick={handleScrollToTop}>
      <Link to={`/gifymo-shop/product/${id}`}>
        <div className="feature-items__item">
          <div className="image-group-actions">
            <img src={image[0]} alt={`item${id}`} />
            <Box className="group-actions flex j-center">
              <ShoppingCartOutlinedIcon className="action__icon" />
              <ZoomInIcon className="action__icon" />
              <FavoriteBorderIcon className="action__icon" />
              <ShareRoundedIcon className="action__icon" />
            </Box>
          </div>
          <div className="info-item">
            <div className="flex j-center">
              <h5>${discounts}&nbsp;</h5>
              <h5 className="item__price">${price}</h5>
            </div>
            <Rating name="read-only" value={star} readOnly precision={0.5} />
            <h4>{name}</h4>
          </div>
        </div>
      </Link>
    </Box>
  );
}

export default Item;
