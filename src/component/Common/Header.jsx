import { makeStyles } from '@material-ui/core';
import GTranslateOutlinedIcon from '@mui/icons-material/GTranslateOutlined';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { CONTAINER, GRAY, MAINCOLOR } from 'constants/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100wh',
    display: 'flex',
    justifyContent: 'center',
    borderBottom: `1px solid ${GRAY}`,
  },
  container: {
    width: CONTAINER,
  },
  layout: {
    justifyContent: 'space-between',
    lineHeight: '18px',
    fontSize: '13px',
    fontWeight: '500',
    color: 'gray'
  },
  flex: {
    display: 'flex',
    alignItems: 'center',
  },
  reset: {
    margin: 0,
    padding: 0,
    textIndent: 0,
    listStyleType: 'none',
  },
  ml: {
    marginLeft: '24px',
    '& >a': {
      textDecoration: 'none',
      color: 'gray',
      '&:hover': {
        color: MAINCOLOR,
      },
    },
  },
  mr: {
    marginRight: '24px',
  },
}));

export function Header(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={`${classes.layout} ${classes.flex}`}>
          <div className={classes.flex}>
            <div className={`${classes.mr} ${classes.flex}`}>
              <LocationOnIcon fontSize="inherit" color="primary" />
              <p>&nbsp;58 Le Van Viet, TP Thu Duc</p>
            </div>

            <div className={`${classes.mr} ${classes.flex}`}>
              <GTranslateOutlinedIcon fontSize="inherit" color="primary" />
              <p>&nbsp;Vietnamese</p>
            </div>
          </div>

          <ul className={`${classes.flex} ${classes.reset}`}>
            <li className={classes.ml}>
              <Link to="/">Sign In / Register</Link>
            </li>
            <li className={classes.ml}>
              <Link to="/about-us">About Us</Link>
            </li>
            <li className={classes.ml}>
              <Link to="/track-order">Track Orders</Link>
            </li>
            <li className={classes.ml}>
              <Link to="/faq">FAQ</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
