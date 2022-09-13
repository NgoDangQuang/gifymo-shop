import { Avatar, TextareaAutosize, TextField } from '@mui/material';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
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

export default function CommentBlogDetails({ dataComment }) {
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
          <Tab label={`COMMENT (${dataComment.length})`} {...a11yProps(0)} />
          <Tab label="LEAVE A COMMENT" {...a11yProps(1)} />
        </Tabs>
      </Box>

      <TabPanel value={value} index={0}>
        <div>
          {dataComment.map((item, index) => (
            <div className="flex content-review-items border-bottom-background">
              <div className="img-review">
                <Avatar alt="Remy Sharp" src={item.avt} sx={{ width: '70px', height: '70px' }} />
              </div>
              <div className="content-review">
                <div className="creator-rating flex">
                  <h3>{item.name}</h3>
                  <h4>{item.update}</h4>
                </div>
                <h4>{item.content}</h4>
              </div>
            </div>
          ))}
        </div>
      </TabPanel>

      <TabPanel value={value} index={1}>
        <div style={{ padding: '20px', fontSize: '20px' }}>
          <h2 style={{ margin: 0, fontFamily: 'Jost', fontWeight: 500 }}>Leave a Reply</h2>
        </div>
        <h4 style={{ padding: '20px', paddingTop: '0', color: 'gray' }}>
          Your email address will not be published. Required fields are marked *
        </h4>
        <div style={{ padding: '20px', display: 'flex', justifyContent: 'center' }}>
          <TextareaAutosize
            aria-label="minimum height"
            minRows={10}
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
          <h4 className="button-post-comment">POST COMMENT</h4>
        </div>
      </TabPanel>
    </Box>
  );
}
