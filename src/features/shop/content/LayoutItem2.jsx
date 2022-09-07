import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareRoundedIcon from '@mui/icons-material/ShareRounded';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import { Rating } from '@mui/material';
import { Link } from 'react-router-dom';
import './styles.css';

function LayoutItem2({ data }) {
  const { id, price, discounts, nameItem, star, description, image } = data;
  return (
    <div className="layout-item-2 flex j-between">
      <div className="layout-item-2__image">
        <img src={image} alt={nameItem} />
      </div>

      <div className="layout-item-2__content">
        <div>
          <div className="flex">
            <h4>${discounts}</h4>
            <h4 style={{ textDecoration: 'line-through', color: 'gray' }}>${price}</h4>
          </div>
          <h2>
            <Link to={`/gifymo-shop/shop/${id}`}>{nameItem}</Link>
          </h2>
          <Rating name="read-only" value={star} readOnly precision={0.5} />
          <p>{description}</p>
        </div>

        <div className="layout-item-2__group-actions flex">
          <div className="add-to-cart">ADD TO CART</div>
          <ZoomInIcon className="action__icon" />
          <FavoriteBorderIcon className="action__icon" />
          <ShareRoundedIcon className="action__icon" />
        </div>
      </div>
    </div>
  );
}

export default LayoutItem2;
