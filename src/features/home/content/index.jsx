import { Box } from '@mui/material';
import { GAP } from 'constants/styles';
import React from 'react';
import Section2 from './section2_4/Section2';
import Section4 from './section2_4/Section4';
import FeatureItems from './section3/FeatureItems';
import SlickSlider from './slider/SlickSlider';

function ContentHomePage(props) {
  return (
    <Box>
      <Box mb={GAP}>
        <SlickSlider />
      </Box>
      <Box mb={GAP}>
        <Section2 />
      </Box>
      <Box mb={GAP}>
        <FeatureItems />
      </Box>
      <Box mb={GAP}>
        <Section4 />
      </Box>
    </Box>
  );
}

export default ContentHomePage;
