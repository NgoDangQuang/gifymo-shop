import { makeStyles } from '@material-ui/core';
import CopyrightIcon from '@mui/icons-material/Copyright';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import { Box, Button, TextField } from '@mui/material';
import { CONTAINER, GRAY, MAINCOLOR } from 'constants/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '40px 0px',
    borderBottom: `4px dotted ${GRAY}`,
  },
  container: {
    width: CONTAINER,
  },
  layout: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  colItems: {
    minWidth: '245px',
    '& > h3, h5, p': {
      margin: 0,
      color: 'gray',
    },
    '& > h3': {
      marginBottom: '18px',
      color: 'black',
    },
    '& > h5': {
      marginTop: '18px',
    },
    '& > p': {
      padding: '8px 0px',
      maxWidth: '450px',
    },
    '& > a': {
      color: 'gray',
      textDecoration: 'none',
      display: 'block',
      padding: '8px 0px',
      '&:hover': {
        color: MAINCOLOR,
      },
    },
  },
  copyRight: {
    padding: '30px 0px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color:'gray'
  },
}));
export function Footer(props) {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.root}>
        <div className={classes.container}>
          <div className={classes.layout}>
            <div className={classes.colItems}>
              <h3>OUR STORE</h3>
              <p>
                We promise we’ll get back to you promptly– your gifting needs are always on our
                minds!
              </p>
              <h5>Monday – Friday 8am – 6pm pts.</h5>
            </div>

            <div className={`${classes.colItems} ${classes.reset}`}>
              <h3>INFORMATION</h3>
              <Link to="/gifymo-shop">My Account</Link>
              <Link to="/gifymo-shop">Track Orders</Link>
              <Link to="/gifymo-shop">Reminder Service</Link>
              <Link to="/gifymo-shop">Shipping & Returns</Link>
            </div>

            <div className={classes.colItems}>
              <h3>SERVICES</h3>
              <Link to="/gifymo-shop">Size Charts</Link>
              <Link to="/gifymo-shop">Contact Us</Link>
              <Link to="/gifymo-shop">How To Order</Link>
              <Link to="/gifymo-shop">FAQ</Link>
            </div>

            <div className={classes.colItems}>
              <h3>NEWSLETTER SIGN-UP</h3>
              <p>For News & Special Offers</p>
              <Box mt={2} mb={1}>
                <TextField size="small" placeholder="name@gmail.com" fullWidth />
              </Box>
              <Button variant="outlined" size="small" color="primary">
                Submit
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.copyRight}>
        {/* <div> */}
          Copyright
          <CopyrightIcon size="small" />
          2022 Gifymo. All Rights Reserved
          <FacebookOutlinedIcon sx={{ color: '#0B7FEB', margin: '0px 8px' }} />
          <TwitterIcon sx={{ color: '#1D9BF0', marginRight: '8px' }} />
          <InstagramIcon sx={{ color: '#CF0880', marginRight: '8px' }} />
          <PinterestIcon sx={{ color: '#E60023', marginRight: '8px' }} />
        {/* </div> */}
      </div>
    </div>
  );
}
