import { makeStyles } from '@material-ui/core';
import WorkOffOutlinedIcon from '@mui/icons-material/WorkOffOutlined';
import { Box } from '@mui/material';
import { MAINCOLOR, SHADOW } from 'constants/styles';
const useStyles = makeStyles((theme) => ({
  layoutNoData: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '50px',
    backgroundColor: 'white',
    borderRadius: '10px',
    boxShadow: SHADOW,
    textAlign: 'center',
  },

  h2: {
    fontSize: '30px',
    color: MAINCOLOR,
  },
}));
function NoData(props) {
  const classes = useStyles();
  return (
    <Box className={classes.layoutNoData}>
      <Box>
        <WorkOffOutlinedIcon
          className={classes.iconNoData}
          sx={{ fontSize: '50px', color: MAINCOLOR }}
        />
        <h2 className={classes.h2}>No Data</h2>
      </Box>
    </Box>
  );
}

export default NoData;
