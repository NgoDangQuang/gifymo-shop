import { makeStyles } from '@material-ui/core';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import { BG_COLOR, MAINCOLOR } from 'constants/styles';
import { useEffect, useState } from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
  },
  icon: {
    position: 'fixed',
    bottom: '40px',
    right: '25px',
    zIndex: '20',
  },
  iconStyle: {
    backgroundColor: BG_COLOR,
    border: `3px solid ${BG_COLOR}`,
    borderRadius: '50%',
    height: '80px',
    width: '80px',
    color: MAINCOLOR,
    cursor: 'pointer',
    animation: 'movebtn 3s ease-in-out infinite',
    transition: 'all 0.5s ease-in-out',
    '&:hover': {
      animation: 'none',
      background: '#fff',
      color: MAINCOLOR,
      border: `3px solid ${MAINCOLOR}`,
    },
  },
  '@keyframes movebtn ': {
    '0%': {
      transform: 'translateY(0px)',
    },
    '25%': {
      transform: 'translateY(20px)',
    },
    ' 50%': {
      transform: 'translateY(0px)',
    },
    '75%': {
      transform: 'translateY(-20px)',
    },
    '100%': {
      transform: ' translateY(0px)',
    },
  },
}));

export function ScrollToTop() {
  const classes = useStyles();

  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 200) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <div className={classes.root}>
      {showTopBtn && (
        <KeyboardDoubleArrowUpIcon
          sx={{ width: '40px', height: '40px' }}
          className={`${classes.icon} ${classes.iconStyle}`}
          onClick={goToTop}
        />
      )}
    </div>
  );
}
