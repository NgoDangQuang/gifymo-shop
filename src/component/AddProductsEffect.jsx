import { makeStyles } from '@material-ui/core';
import { Alert } from '@mui/material';
import Snackbar from '@mui/material/Snackbar';

const useStyles = makeStyles((theme) => ({
  layout: {
    display: 'flex',
    alignItems: 'center',
    width: '400px',
    gap: '20px',
  },
  img: {
    width: '50px',
    '&>img': {
      width: '100%',
    },
  },
  content: {
    width: '75%',
    fontFamily: 'Jost',
  },
}));
export default function AddProductsEffect({
  data,
  openToastMessage,
  setOpenToastMessage,
  message,
}) {
  const classes = useStyles();

  const handleClose = () => {
    setOpenToastMessage(false);
  };
  return (
    <div>
      <Snackbar
        open={openToastMessage}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Alert onClose={handleClose} severity="success" sx={{ alignItems: 'center' }}>
          {data && (
            <div className={classes.layout}>
              <div className={classes.img}>
                <img src={data?.image[0]} alt={data?.id} />
              </div>
              <div className={classes.content}>
                <h4>
                  {data?.name} {message}
                </h4>
              </div>
            </div>
          )}
        </Alert>
      </Snackbar>
    </div>
  );
}
