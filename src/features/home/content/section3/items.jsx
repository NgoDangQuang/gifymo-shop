import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareRoundedIcon from '@mui/icons-material/ShareRounded';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import { Box, Rating } from '@mui/material';
import { Link } from 'react-router-dom';
function Item(props) {
  const { data } = props;
  const { price, discounts, nameItem, image, star, id } = data;

  return (
    <Box className="layout-items-main">
      <Link to="/gifymo-shop/shop">
        <div className="feature-items__item">
          <div className="image-group-actions">
            <img src={image} alt={`item${id}`} />
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
            <h4>{nameItem}</h4>
          </div>
        </div>
      </Link>
    </Box>
  );
}

export default Item;
