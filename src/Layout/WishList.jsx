import { makeStyles } from '@material-ui/core';
import { BG_COLOR, GRAY, MAINCOLOR } from 'constants/styles';
import { useState } from 'react';
import { RiCloseFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import AddProductsEffect from 'component/AddProductsEffect';
import WishListItem from './WishListItem';

const useStyles = makeStyles((theme) => ({
  layout: {
    background: 'white',
    border: `2px solid ${GRAY}`,
    borderRadius: '10px',
    fontFamily: 'Jost',
    padding: '20px',
    position: 'relative',
  },
  wishListLayout: {
    display: 'flex',
    justifyContent: 'center',
    '&>h5': {
      fontFamily: 'Jost',
      fontSize: '28px',
      textAlign: 'center',
      color: MAINCOLOR,
      margin: 0,
      letterSpacing: '3px',
      borderBottom: '2px dashed green',
      display: 'inline-block',
    },
  },
  layoutListItem: {
    maxHeight: '60vh',
    overflowY: 'scroll',
    '&::-webkit-scrollbar': {
      width: '10px',
      backgroundColor: '#F5F5F5',
    },

    '&::-webkit-scrollbar-thumb': {
      borderRadius: '10px',
      background: 'linear-gradient(to right, #fff, #e4e4e4)',
      border: '1px solid #aaa',
    },

    '&::-webkit-scrollbar-thumb:hover': {
      background: 'var(--BG_WHITE)',
    },
  },
  layoutContinue: {
    '&>a': {
      textDecoration: 'none',
    },
  },
  shopping: {
    background: MAINCOLOR,
    padding: '10px',
    textAlign: 'center',
    color: 'white',
    cursor: 'pointer',
    transition: 'all 0.2s linear',
    '&>h4': {
      fontWeight: '500',
      fontSize: '16px',
      color: 'white',
      letterSpacing: '2px',
    },
    '&:hover': {
      background: BG_COLOR,
      '&>h4': {
        color: MAINCOLOR,
      },
    },
  },
  tamgiac: {
    position: 'absolute',
    width: 0,
    height: 0,
    top: 0,
    left: '50%',
    transform: 'translate(-50%,-110%)',
    borderLeft: '15px solid transparent',
    borderBottom: `10px solid ${GRAY}`,
    borderRight: '15px solid transparent',
  },
  subTamgiac: {
    width: 0,
    height: 0,
    position: 'absolute',
    top: 0,
    transform: 'translate(-50%,20%)',
    borderLeft: '14px solid transparent',
    borderBottom: '9px solid white',
    borderRight: '14px solid transparent',
  },
  noItem: {
    width: '400px',
    textAlign: 'center',
  },
  closeModal: {
    position: 'absolute',
    right: 0,
    top: 0,
    padding: '8px 16px',
    background: MAINCOLOR,
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    borderRadius: '0px 10px 0px 10px',
    cursor: 'pointer',
    transition: 'all 0.3s linear',
    '&:hover': {
      background: '#EA4B4B',
    },
  },
}));

const WishList = ({ setShowWishList }) => {
  const classes = useStyles();
  const wishListData = JSON.parse(localStorage.getItem('WishList'));
  const [openToastMessage, setOpenToastMessage] = useState(false);
  const [dataItem, setDataItem] = useState();

  return (
    <div className={classes.layout}>
      <div className={classes.closeModal} onClick={() => setShowWishList(false)}>
        <RiCloseFill />
      </div>
      <div className={classes.tamgiac}>
        <div className={classes.subTamgiac}></div>
      </div>
      <div className={classes.wishListLayout}>
        <h5>Wish List</h5>
      </div>
      <div className={classes.noItem}>
        {(wishListData?.length === 0 || !wishListData) && <h3>No Items in Wish List</h3>}
      </div>
      <div className={classes.layoutListItem}>
        {wishListData?.map((item, index) => (
          <>
            <WishListItem
              data={item}
              key={index}
              setShowWishList={setShowWishList}
              setOpenToastMessage={setOpenToastMessage}
              setDataItem={setDataItem}
            />
            {openToastMessage && (
              <AddProductsEffect
                data={dataItem}
                openToastMessage={openToastMessage}
                setOpenToastMessage={setOpenToastMessage}
                message={'has been add to your cart'}
              />
            )}
          </>
        ))}
      </div>
      <div className={classes.layoutContinue}>
        <Link to={'/gifymo-shop/shop'} onClick={() => setShowWishList(false)}>
          <div className={classes.shopping}>
            <h4>Continue Shopping</h4>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default WishList;
