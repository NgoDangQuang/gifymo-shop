import { makeStyles } from '@material-ui/core';
import { CONTAINER, GRAY } from 'constants/styles';
import React from 'react';
import logo from './../asset/img/logo.svg'
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100wh',
    display: 'flex',
    justifyContent: 'center',
    borderBottom: `4px dotted ${GRAY}`,
    padding: '20px 0px',
  },
  container: {
    width: CONTAINER,
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
      fontSize: '12px',
      color: 'gray',
    },
    '& > h5': {
      marginBottom: '8px',
    },
  },
}));
export function ContactLogo(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.layout}>
          <div className={classes.layoutItem}>
            <div className={`${classes.item}`}>
              <div className={classes.logo}>
                <Link to="/gifymo-shop">
                  <img
                    src={logo}
                    alt="logo"
                  />
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
            <div className={`${classes.item} ${classes.flex}`}>
              <div className={classes.image}>
                <img src={require('./../asset/icons/card.gif')} alt="card" />
              </div>
              <div className={classes.content}>
                <p>Cart: 0 items</p>
                <h5>$0</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
