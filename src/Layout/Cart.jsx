import { makeStyles } from '@material-ui/core';
import { BG_COLOR, GRAY, MAINCOLOR } from 'constants/styles';
import { RiCloseFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import CartItem from './CartIem';

const useStyles = makeStyles((theme) => ({
  layout: {
    background: 'white',
    border: `2px solid ${GRAY}`,
    borderRadius: '10px',
    fontFamily: 'Jost',
    padding: '20px',
    position: 'relative',
  },
  cartLayout: {
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
  layoutOrder: {
    '&>a': {
      textDecoration: 'none',
    },
  },
  order: {
    background: MAINCOLOR,
    padding: '10px',
    textAlign: 'center',
    color: 'white',
    cursor: 'pointer',
    transition: 'all 0.2s linear',
    '&>h4': {
      fontWeight: '500',
      fontSize: '16px',
      letterSpacing: '3px',
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
const Cart = ({ setShowCart }) => {
  const classes = useStyles();
  const cartData = JSON.parse(localStorage.getItem('ListItems'));

  return (
    <div className={classes.layout}>
      <div className={classes.closeModal} onClick={() => setShowCart(false)}>
        <RiCloseFill />
      </div>
      <div className={classes.tamgiac}>
        <div className={classes.subTamgiac}></div>
      </div>
      <div className={classes.cartLayout}>
        <h5>Cart</h5>
      </div>
      <div className={classes.noItem}>
        {(cartData?.length === 0 || !cartData) && <h3>No Items in Cart</h3>}
      </div>
      <div className={classes.layoutListItem}>
        {cartData?.map((item, index) => (
          <CartItem data={item} key={index} setShowCart={setShowCart} />
        ))}
      </div>

      <div className={classes.layoutOrder}>
        <Link to={'/gifymo-shop/pay'} onClick={() => setShowCart(false)}>
          <div className={classes.order}>
            <h4>PAY NOW</h4>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
