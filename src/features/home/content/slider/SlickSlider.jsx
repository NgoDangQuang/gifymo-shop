import { Box } from '@mui/material';
import { useState } from 'react';
import Slider1 from './Slider1';
import Slider2 from './Slider2';
import Slider3 from './Slider3';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import './slickSlider.css';

const SlickSlider = () => {
  const [showSlider, setShowSlider] = useState(1);

  const nextSlider = () => {
    if (showSlider === 3) {
      setShowSlider(1);
    } else {
      setShowSlider(showSlider + 1);
    }
  };
  const prevSlider = () => {
    if (showSlider === 1) {
      setShowSlider(3);
    } else {
      setShowSlider(showSlider - 1);
    }
  };
  return (
    <Box className="layout-content-slider">
      <ArrowBackIosNewIcon onClick={prevSlider} className="slick-icon left " />
      <ArrowForwardIosIcon onClick={nextSlider} className="slick-icon right" />
      {showSlider === 1 && (
        <Box>
          <Slider1 />
        </Box>
      )}
      {showSlider === 2 && (
        <Box>
          <Slider2 />
        </Box>
      )}
      {showSlider === 3 && (
        <Box>
          <Slider3 />
        </Box>
      )}
    </Box>
  );
};

export default SlickSlider;
