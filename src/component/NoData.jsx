import { makeStyles } from '@material-ui/core';
import WorkOffOutlinedIcon from '@mui/icons-material/WorkOffOutlined';
import { Box } from '@mui/material';
const useStyles = makeStyles((theme) => ({
  layoutNoData: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '20px',
    textAlign: 'center',
  },

  h3: {
    fontSize: '24px',
    color: 'gray',
  },
}));
function NoData(props) {
  const classes = useStyles();
  return (
    <Box className={classes.layoutNoData}>
      <Box>
        <WorkOffOutlinedIcon
          className={classes.iconNoData}
          sx={{ fontSize: '30px', color: 'gray' }}
        />
        <h3 className={classes.h3}>No Data</h3>
      </Box>
    </Box>
  );
}

export default NoData;
