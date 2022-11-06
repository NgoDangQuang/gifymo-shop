import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareRoundedIcon from '@mui/icons-material/ShareRounded';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import { Rating } from '@mui/material';
import AddProductsEffect from 'component/AddProductsEffect';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCartItems, getWishList } from 'redux/getData';
import { AddProduct } from 'utils/AddProduct';
import { AddWishListItem } from 'utils/AddWishListItem';
import './styles.css';

function LayoutItem2({ data }) {
  const { price, discounts, name, star, description, image, id } = data;

  const [openToastMessageAddProduct, setOpenToastMessageAddProduct] = useState(false);
  const [openToastMessageAddWishList, setOpenToastMessageAddWishList] = useState(false);

  const dispatch = useDispatch();
  const handleAddProduct = () => {
    setOpenToastMessageAddProduct(true);
    AddProduct(data, 1);
    const cartData = JSON.parse(localStorage.getItem('ListItems'));
    dispatch(getCartItems(cartData));
  };

  const handleWishList = () => {
    setOpenToastMessageAddWishList(true);
    AddWishListItem(data);
    const wishList = JSON.parse(localStorage.getItem('WishList'));
    dispatch(getWishList(wishList));
  };
  return (
    <>
      <div className="layout-item-2 flex j-between">
        <div className="layout-item-2__image">
          <img src={image[0]} alt={name} />
        </div>

        <div className="layout-item-2__content">
          <div>
            <div className="flex">
              <h4>${discounts}</h4>
              <h4 style={{ textDecoration: 'line-through', color: 'gray' }}>${price}</h4>
            </div>
            <h2>
              <Link to={`/gifymo-shop/product/${id}`}>{name}</Link>
            </h2>
            <Rating name="read-only" value={star} readOnly precision={0.5} />
            <p>{description}</p>
          </div>

          <div className="layout-item-2__group-actions flex">
            <div className="add-to-cart" onClick={handleAddProduct}>
              ADD TO CART
            </div>
            <ZoomInIcon className="action__icon" />
            <FavoriteBorderIcon className="action__icon" onClick={handleWishList} />
            <ShareRoundedIcon className="action__icon" />
          </div>
        </div>
      </div>
      {openToastMessageAddProduct && (
        <AddProductsEffect
          data={data}
          openToastMessage={openToastMessageAddProduct}
          setOpenToastMessage={setOpenToastMessageAddProduct}
          message={'has been add to your cart'}
        />
      )}
      {openToastMessageAddWishList && (
        <AddProductsEffect
          data={data}
          openToastMessage={openToastMessageAddWishList}
          setOpenToastMessage={setOpenToastMessageAddWishList}
          message={'has been add Wish List'}
        />
      )}
    </>
  );
}

export default LayoutItem2;
