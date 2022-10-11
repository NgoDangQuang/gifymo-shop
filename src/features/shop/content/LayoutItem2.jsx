import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareRoundedIcon from '@mui/icons-material/ShareRounded';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import { Rating } from '@mui/material';
import AddProductsEffect from 'component/AddProductsEffect';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

function LayoutItem2({ data }) {
  const { price, discounts, name, star, description, image, id } = data;

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
            <FavoriteBorderIcon className="action__icon" />
            <ShareRoundedIcon className="action__icon" />
          </div>
        </div>
      </div>
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

export default LayoutItem2;
