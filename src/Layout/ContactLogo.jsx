import { makeStyles } from '@material-ui/core';
import { CONTAINER, MAINCOLOR } from 'constants/styles';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './../asset/img/logo.svg';
import Cart from './Cart';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100wh',
    display: 'flex',
    justifyContent: 'center',
    padding: '20px 0px',
    backgroundImage:
      'radial-gradient(circle at 1.5px, rgba(0, 0, 0, 0.349) .75px, rgba(255, 255, 255, 0.11) 1.5px)',
    backgroundSize: '8px 2px',
    backgroundRepeat: 'repeat-x',
    backgroundPosition: 'bottom center',
    fontFamily: 'Jost',
  },
  container: {
    width: CONTAINER,
    position: 'relative',
  },
  layout: {
    display: 'flex',
    alignItems: 'center',
  },
  flex: {
    display: 'flex',
    alignItems: 'center',
  },
  logo: {
    width: '156px',
  },
  layoutItem: {
    width: '25%',
    justifyContent: 'center',
  },
  item: {},
  image: {
    width: '60px',
    marginRight: '10px',
    '& >img': {
      width: '100%',
    },
  },
  content: {
    '& > p, h5': {
      margin: 0,
    },
    '& > p': {
      marginBottom: '4px',
      fontSize: '14px',
      color: 'gray',
    },
    '& > h5': {
      marginBottom: '8px',
      fontWeight: '500',
      fontSize: '16px',
    },
  },
  cursor: {
    cursor: 'pointer',
  },
  cartName: {
    fontSize: '15px',
    fontWeight: '500',
    color: MAINCOLOR,
  },
  cartProducts: {
    position: 'absolute',
    right: 0,
    top: '100%',
    zIndex: 100000,
  },
}));
export function ContactLogo(props) {
  const classes = useStyles();
  const [showCart, setShowCart] = useState(false);
  const handleShowCart = () => {
    setShowCart(!showCart);
  };
  const [data, setData] = useState();

  let sumMoney = 0;
  setInterval(() => {
    const cartData = JSON.parse(localStorage.getItem('ListItems'));
    if (cartData !== data) {
      setData(cartData);
    }
  }, 5000);
  data?.map((item) => (sumMoney += item.discounts * item.count));

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.layout}>
          <div className={classes.layoutItem}>
            <div className={`${classes.item}`}>
              <div className={classes.logo}>
                <Link to="/gifymo-shop">
                  <img src={logo} alt="logo" />
                </Link>
              </div>
            </div>
          </div>

          <div className={`${classes.layoutItem} ${classes.flex}`}>
            <div className={`${classes.item} ${classes.flex}`}>
              <div className={classes.image}>
                <img src={require('./../asset/icons/car2.gif')} alt="box" />
              </div>
              <div className={`${classes.content}`}>
                <p>Free standard shipping</p>
                <h5>on all orders over $99</h5>
              </div>
            </div>
          </div>

          <div className={`${classes.layoutItem} ${classes.flex}`}>
            <div className={`${classes.item} ${classes.flex}`}>
              <div className={classes.image}>
                <img src={require('./../asset/icons/user.gif')} alt="supporter" />
              </div>
              <div className={`${classes.content}`}>
                <p>support@example.com</p>
                <h5>0123 - 456 - 789</h5>
              </div>
            </div>
          </div>

          <div className={`${classes.layoutItem} ${classes.flex}`}>
            <div className={classes.image}>
              <img src={require('./../asset/icons/heart.gif')} alt="likeList" />
            </div>
            <div
              className={`${classes.item} ${classes.flex} ${classes.cursor}`}
              onClick={handleShowCart}
            >
              <div className={classes.image}>
                <img src={require('./../asset/icons/card.gif')} alt="card" />
              </div>
              <div className={classes.content}>
                <h4 className={classes.cartName}>Cart: {data?.length || 0} items</h4>
                <h5>${sumMoney || 0}</h5>
              </div>
            </div>
          </div>
          <div className={classes.cartProducts}>
            {showCart && <Cart setShowCart={setShowCart} />}
          </div>
        </div>
      </div>
    </div>
  );
}
