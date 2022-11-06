import { makeStyles } from '@material-ui/core';
import { GRAY, MAINCOLOR } from 'constants/styles';
import { BiTrash } from 'react-icons/bi';
import { FaCartPlus } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCartItems, getWishList } from 'redux/getData';
import { AddProduct } from 'utils/AddProduct';

const useStyles = makeStyles((theme) => ({
  layoutItem: {
    display: 'flex',
    alignItems: 'center',
    padding: '10px 0px',
    backgroundImage:
      'radial-gradient(circle at 1.5px, rgba(0, 0, 0, 0.349) .75px, rgba(255, 255, 255, 0.11) 1.5px)',
    backgroundSize: '8px 2px',
    backgroundRepeat: 'repeat-x',
    backgroundPosition: 'bottom center',
    '&:last-child': {
      backgroundImage: 'none',
    },
  },
  content: {
    display: 'flex',
    width: '75%',
  },
  image: {
    width: '25%',
    '& > a': {
      '& > img': {
        width: '80px',
      },
    },
  },
  name: {
    width: '100%',
    marginRight: '20px',
    '& > a': {
      textDecoration: 'none',
      '&>h3': {
        margin: 0,
        fontSize: '16px',
        fontWeight: '500',
        marginBottom: '5px',
        color: 'black',
        transition: 'all 0.4s linear',
        '&:hover': {
          color: MAINCOLOR,
        },
      },
    },
  },
  price: {
    display: 'flex',
    alignItems: 'center',
    '& > h3': {
      margin: 0,
      marginLeft: '10px',
      fontWeight: '500',
      color: MAINCOLOR,
      fontFamily: 'Jost',
      lineHeight: '24px',
      fontSize: '18px',
    },
    '&>h4': {
      textDecoration: 'line-through',
      textDecorationColor: 'gray',
      fontSize: '18px',
      color: 'gray',
    },
  },
  addToCart: {
    padding: '5px 10px',
    background: '#99FFFF',
    color: 'black',
    border: `2px solid ${GRAY}`,
    marginRight: '10px',
    fontSize: '14px',
    cursor: 'pointer',
    borderRadius: '10px',
    transition: 'all 0.3s linear',
    '&:hover': {
      background: '#00CCFF',
      color: 'white',
    },
  },
  boxCount: {
    display: 'flex',
    alignItems: 'center',
    border: '1px solid gray',
    '&>h4': {
      padding: '2px 15px',
      borderLeft: '1px solid gray',
      borderRight: '1px solid gray',
    },
  },
  deleteItem: {
    padding: '5px 10px',
    background: '#FF6699',
    color: 'black',
    borderRadius: '10px',
    border: `2px solid ${GRAY}`,
    fontSize: '14px',
    cursor: 'pointer',
    transition: 'all 0.3s linear',
    '&:hover': {
      background: '#FF3300',
      color: 'white',
    },
  },
  flex: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
}));

const WishListItem = ({ data, setShowWishList, setOpenToastMessage, setDataItem }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleAddItem = () => {
    setOpenToastMessage(true);
    setDataItem(data);
    AddProduct(data, 1);
    const cartData = JSON.parse(localStorage.getItem('ListItems'));
    dispatch(getCartItems(cartData));
    handleDeleteItem();
  };

  const handleDeleteItem = () => {
    const wishListData = JSON.parse(localStorage.getItem('WishList'));
    let newData = [];
    for (let i = 0; i < wishListData?.length; i++) {
      if (wishListData[i].id !== data.id) {
        newData.push(wishListData[i]);
      }
    }
    localStorage.setItem('WishList', JSON.stringify(newData));
    dispatch(getWishList(newData));
  };

  return (
    <>
      <div className={classes.layoutItem}>
        <div className={classes.image}>
          <Link to={`/gifymo-shop/product/${data?.id}`} onClick={() => setShowWishList(false)}>
            <img src={data?.image[0]} alt={data.id} />
          </Link>
        </div>
        <div className={classes.content}>
          <div className={classes.name}>
            <Link to={`/gifymo-shop/product/${data?.id}`} onClick={() => setShowWishList(false)}>
              <h3>{data?.name}</h3>
            </Link>
            <div className={classes.flex}>
              <div className={classes.price}>
                <h4>${data.price}</h4>
                <h3>${data.discounts}</h3>
              </div>
              <div className={classes.flex}>
                <span className={classes.addToCart} onClick={handleAddItem}>
                  <FaCartPlus />
                </span>
                <span className={classes.deleteItem} onClick={handleDeleteItem}>
                  <BiTrash />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WishListItem;
