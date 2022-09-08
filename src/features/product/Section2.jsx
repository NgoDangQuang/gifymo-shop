import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { Avatar, Button, Rating, TextareaAutosize, TextField } from '@mui/material';
import { useState } from 'react';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box mt={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function Section2({ dataReview }) {
  const [value, setValue] = useState(0);
  const [rating, setRating] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: 'divider',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Description" {...a11yProps(0)} />
          <Tab label="additional information" {...a11yProps(1)} />
          <Tab label={`review (${dataReview.length})`} {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <div className="section2-description">
          <h4>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </h4>
          <h3>Product Features</h3>
          <div className="section2-description-item flex">
            <CheckCircleOutlineIcon className="icon-check" />
            <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h4>
          </div>
          <div className="section2-description-item flex">
            <CheckCircleOutlineIcon className="icon-check" />
            <h4>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h4>
          </div>
          <div className="section2-description-item flex">
            <CheckCircleOutlineIcon className="icon-check" />
            <h4>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat.
            </h4>
          </div>
          <div className="section2-description-item flex">
            <CheckCircleOutlineIcon className="icon-check" />
            <h4>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </h4>
          </div>
          <h4>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
            consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro
            quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
            quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
            voluptatem.
          </h4>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div style={{ padding: '0px 20px' }}>
          <Rating
            name="simple-controlled"
            value={rating}
            onChange={(event, newValue) => {
              setRating(newValue);
            }}
          />
        </div>
        <div style={{ padding: '20px', display: 'flex', justifyContent: 'center' }}>
          <TextareaAutosize
            aria-label="minimum height"
            minRows={10}
            placeholder="Your review"
            style={{ width: '100%', padding: '20px' }}
          />
        </div>
        <div
          style={{
            padding: '20px',
            paddingTop: '0px',
            display: 'flex',
            justifyContent: 'center',
            gap: '20px',
          }}
        >
          <TextField label="Name" variant="outlined" fullWidth="true" />
          <TextField label="Email" variant="outlined" fullWidth="true" />
        </div>
        <div style={{ padding: '20px', display: 'flex', justifyContent: 'center' }}>
          <Button variant="contained">Submit Your review</Button>
        </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        {dataReview.map((item, index) => (
          <div className="flex content-review-items border-bottom-background">
            <div className="img-review">
              <Avatar alt="Remy Sharp" src={item.avt} sx={{ width: '70px', height: '70px' }} />
            </div>
            <div className="content-review">
              <h4>{item.content}</h4>
              <div className="creator-rating flex">
                <Rating name="read-only" value={item.star} readOnly precision={0.5} />
                <h3>{item.poster}</h3>
                <h4>{item.date}</h4>
              </div>
            </div>
          </div>
        ))}
      </TabPanel>
    </Box>
  );
}
