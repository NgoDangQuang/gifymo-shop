import { makeStyles } from '@material-ui/core';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { BiTrash } from 'react-icons/bi';
import { useState } from 'react';
import { MAINCOLOR } from 'constants/styles';

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
    marginRight: '10px',
    '& >img': {
      width: '80px',
    },
  },
  name: {
    width: '85%',
    '& > h3': {
      margin: 0,
      fontSize: '16px',
      fontWeight: '500',
      marginBottom: '10px',
    },
  },
  price: {
    display: 'flex',
    alignItems: 'center',
    '& > h3': {
      margin: 0,
      marginLeft: '18px',
      fontWeight: '500',
      color: MAINCOLOR,
      fontFamily: 'Jost',
      lineHeight: '24px',
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
  iconPlusRemove: {
    color: 'gray',
    padding: '2px',
    fontWeight: 'bold',
    transition: 'all 0.3s linear',
    '&:hover': {
      color: MAINCOLOR,
    },
  },
  deleteItem: {
    width: '15%',
  },
  iconDelete: {
    fontSize: '22px',
    color: 'gray',
    transition: 'all 0.4s linear',
    '&:hover': {
      color: MAINCOLOR,
    },
  },
}));

const CartItem = ({ data }) => {
  const classes = useStyles();
  const [buyCount, setBuyCount] = useState(data?.count);

  const handleDeleteItem = () => {
    const cartData = JSON.parse(localStorage.getItem('ListItems'));
    let newData = [];
    for (let i = 0; i < cartData?.length; i++) {
      if (cartData[i].id !== data.id) {
        newData.push(cartData[i]);
      }
    }
    localStorage.setItem('ListItems', JSON.stringify(newData));
  };

  const handleMinus = () => {
    setBuyCount(buyCount - 1);
    const cartData = JSON.parse(localStorage.getItem('ListItems'));
    let newData = [];
    for (let i = 0; i < cartData?.length; i++) {
      if (cartData[i].id === data.id) {
        cartData[i].count--;
      }
      if (cartData[i].count > 0) {
        newData.push(cartData[i]);
      }
    }
    localStorage.setItem('ListItems', JSON.stringify(newData));
  };

  const handlePlus = () => {
    setBuyCount(buyCount + 1);
    const cartData = JSON.parse(localStorage.getItem('ListItems'));
    let newData = [];
    for (let i = 0; i < cartData?.length; i++) {
      if (cartData[i].id === data.id) {
        cartData[i].count++;
      }
      newData.push(cartData[i]);
    }
    localStorage.setItem('ListItems', JSON.stringify(newData));
  };

  return (
    <div className={classes.layoutItem}>
      <div className={classes.image}>
        <img src={data?.image[0]} alt={data.id} />
      </div>
      <div className={classes.content}>
        <div className={classes.name}>
          <h3>{data?.name}</h3>
          <div className={classes.price}>
            <div className={classes.boxCount}>
              <RemoveIcon
                fontSize="small"
                className={classes.iconPlusRemove}
                onClick={handleMinus}
              />
              <h4>{buyCount}</h4>
              <AddIcon fontSize="small" className={classes.iconPlusRemove} onClick={handlePlus} />
            </div>
            <h3>$ {data.discounts}</h3>
          </div>
        </div>
        <div className={classes.deleteItem}>
          <BiTrash className={classes.iconDelete} onClick={handleDeleteItem} />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
