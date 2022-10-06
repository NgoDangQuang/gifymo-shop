import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { Rating, TextareaAutosize, TextField } from '@mui/material';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { useSelector } from 'react-redux';

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

export default function Section2() {
  const [value, setValue] = useState(0);
  const [rating, setRating] = useState(0);
  const { commentById, descriptionById } = useSelector((state) => state.getData);

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
          <Tab label={`review (${commentById?.length})`} {...a11yProps(1)} />
          <Tab label="Your Review" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        {descriptionById && (
          <div className="section2-description">
            <h4>{descriptionById[0]?.content1}</h4>
            <h3>Product Features</h3>
            {descriptionById[0]?.productFeature?.map((item, index) => (
              <div className="section2-description-item flex" key={index}>
                <CheckCircleOutlineIcon className="icon-check" />
                <h4>{item}</h4>
              </div>
            ))}
            <h4>{descriptionById[0]?.content2}</h4>
          </div>
        )}
      </TabPanel>

      <TabPanel value={value} index={1}>
        <div>
          {commentById?.map((item, index) => (
            <div className="flex content-review-items border-bottom-background" key={index}>
              <div>
                <FaUser style={{ fontSize: '50px', color: 'gray', marginRight: '20px' }} />
              </div>
              <div className="content-review">
                <h4>{item?.content}</h4>
                <div className="creator-rating flex">
                  <Rating name="read-only" value={item?.star} readOnly precision={0.5} />
                  <h3>{item?.userName}</h3>
                  <h4>{item?.updatedAt}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </TabPanel>

      <TabPanel value={value} index={2}>
        <div style={{ padding: '20px', fontSize: '20px' }}>
          <h2 style={{ margin: 0, fontFamily: 'Jost', fontWeight: 500 }}>Your Review</h2>
        </div>
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
        <div className="checkbox-blog-details flex">
          <input type="checkbox" />
          <h4>Save my name, email, and website in this browser for the next time I comment.</h4>
        </div>
        <div style={{ padding: '20px' }}>
          <h4 className="button-post-comment">SUBMIT YOUR REVIEW</h4>
        </div>
      </TabPanel>
    </Box>
  );
}
