import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareRoundedIcon from '@mui/icons-material/ShareRounded';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import { Box, Rating } from '@mui/material';
import AddProductsEffect from 'component/AddProductsEffect';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Item(props) {
  const { data } = props;
  const [openToastMessage, setOpenToastMessage] = useState(false);

  const handleAddProduct = () => {
    let newData = { ...data, count: 1 };
    if (!localStorage.getItem('ListItems')) {
      localStorage.setItem('ListItems', JSON.stringify([newData]));
    } else {
      const oldData = localStorage.getItem('ListItems');
      let Obj = JSON.parse(oldData);

      let num = 0;
      for (let i = 0; i < Obj.length; i++) {
        if (Obj[i].id === newData.id) {
          num++;
        }
      }
      if (num === 0) {
        Obj.push(newData);
        localStorage.setItem('ListItems', JSON.stringify(Obj));
      }
    }
    setOpenToastMessage(true);
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
                <FavoriteBorderIcon className="action__icon" />
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
      {openToastMessage && (
        <AddProductsEffect
          data={data}
          openToastMessage={openToastMessage}
          setOpenToastMessage={setOpenToastMessage}
        />
      )}
    </>
  );
}

export default Item;
