import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareRoundedIcon from '@mui/icons-material/ShareRounded';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import { Box, Rating } from '@mui/material';
import AddProductsEffect from 'component/AddProductsEffect';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCartItems, getWishList } from 'redux/getData';
import { AddProduct } from 'utils/AddProduct';
import { AddWishListItem } from 'utils/AddWishListItem';

function Item(props) {
  const { data } = props;
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
      <Box className="layout-items-main">
        {data && (
          <div className="feature-items__item">
            <div className="image-group-actions">
              <Link to={`/gifymo-shop/product/${data?.id}`}>
                <img src={data?.image[0]} alt={`item${data?.id}`} />
              </Link>
              <Box className="group-actions flex j-center">
                <ShoppingCartOutlinedIcon className="action__icon" onClick={handleAddProduct} />
                <ZoomInIcon className="action__icon" />
                <FavoriteBorderIcon className="action__icon" onClick={handleWishList} />
                <ShareRoundedIcon className="action__icon" />
              </Box>
            </div>
            <div className="info-item">
              <div className="flex j-center">
                <h5>${data?.discounts}&nbsp;</h5>
                <h5 className="item__price">${data?.price}</h5>
              </div>
              <Rating name="read-only" value={data?.star} readOnly precision={0.5} />
              <Link to={`/gifymo-shop/product/${data?.id}`}>
                <h4>{data?.name}</h4>
              </Link>
            </div>
          </div>
        )}
      </Box>
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

export default Item;
