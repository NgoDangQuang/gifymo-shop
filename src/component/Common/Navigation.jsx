import { makeStyles } from '@material-ui/core';
import { BG_COLOR, CONTAINER, FONT_COLOR_NAV } from 'constants/styles';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    width: CONTAINER,
  },
  layout: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    '& >a': {
      textDecoration: 'none',
      color: 'black',
    },
  },
  layoutItems: {
    position: 'relative',
    marginRight: '20px',
    background: 'white',
    cursor: 'pointer',
    '&:hover > div': {
      display: 'block',
      background: BG_COLOR,
      color: FONT_COLOR_NAV,
    },
  },
  item: {
    padding: '12px 20px',
    '& > h3': {
      margin: 0,
      fontSize: '14px',
      fontWeight: '600',
      lineHeight: '16px',
    },
  },
  triangleLeft: {
    display: 'none',
    position: 'absolute',
    width: 0,
    height: 0,
    borderTop: '20px solid transparent',
    borderLeft: '10px solid white',
    borderBottom: '20px solid transparent',
  },
  triangleRight: {
    display: 'none',
    position: 'absolute',
    right: 0,
    top: 0,
    width: 0,
    height: 0,
    borderTop: '20px solid transparent',
    borderRight: '10px solid white',
    borderBottom: '20px solid transparent',
  },
  active: {
    color: FONT_COLOR_NAV,
    '& > div': {
      display: 'block',
      background: BG_COLOR,
    },
  },
}));
export function Navigation(props) {
  const classes = useStyles();
  const [actived, setActived] = useState(1);

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.layout}>
          <Link to="/">
            <div
              className={`${classes.layoutItems} ${actived === 1 && classes.active}`}
              onClick={() => setActived(1)}
            >
              <div className={classes.triangleLeft}></div>
              <div className={`${classes.item}`}>
                <h3>HOME</h3>
              </div>
              <div className={classes.triangleRight}></div>
            </div>
          </Link>

          <Link to="/shop">
            <div
              className={`${classes.layoutItems} ${actived === 2 && classes.active}`}
              onClick={() => setActived(2)}
            >
              <div className={classes.triangleLeft}></div>
              <div className={`${classes.item}`}>
                <h3>SHOP</h3>
              </div>
              <div className={classes.triangleRight}></div>
            </div>
          </Link>

          <Link to="/our-team">
            <div
              className={`${classes.layoutItems} ${actived === 3 && classes.active}`}
              onClick={() => setActived(3)}
            >
              <div className={classes.triangleLeft}></div>
              <div className={`${classes.item}`}>
                <h3>OUR TEAM</h3>
              </div>
              <div className={classes.triangleRight}></div>
            </div>
          </Link>

          <Link to="/out-story">
            <div
              className={`${classes.layoutItems} ${actived === 4 && classes.active}`}
              onClick={() => setActived(4)}
            >
              <div className={classes.triangleLeft}></div>
              <div className={`${classes.item}`}>
                <h3>OUR STORY</h3>
              </div>
              <div className={classes.triangleRight}></div>
            </div>
          </Link>

          <Link to="/blogs">
            <div
              className={`${classes.layoutItems} ${actived === 5 && classes.active}`}
              onClick={() => setActived(5)}
            >
              <div className={classes.triangleLeft}></div>
              <div className={`${classes.item}`}>
                <h3>BLOG</h3>
              </div>
              <div className={classes.triangleRight}></div>
            </div>
          </Link>

          <Link to="/contact">
            <div
              className={`${classes.layoutItems} ${actived === 6 && classes.active}`}
              onClick={() => setActived(6)}
            >
              <div className={classes.triangleLeft}></div>
              <div className={`${classes.item}`}>
                <h3>CONTACT</h3>
              </div>
              <div className={classes.triangleRight}></div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
