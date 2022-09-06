import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { MAINCOLOR } from 'constants/styles';
import { useState } from 'react';
import './styles.css';

export default function FilterByPrice(props) {
  const {
    minPrice,
    maxPrice,
    filterMinPrice,
    filterMaxPrice,
    setFilterMinPrice,
    setFilterMaxPrice,
  } = props;
  const [value, setValue] = useState([filterMinPrice, filterMaxPrice]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setFilterMinPrice(newValue[0]);
    setFilterMaxPrice(newValue[1]);
  };

  return (
    <Box className="filterPrice">
      <h2>Filter by Price</h2>
      <Box sx={{ width: '100%' }}>
        <Slider
          getAriaLabel={() => 'Temperature range'}
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
          min={minPrice}
          max={maxPrice}
          sx={{ color: MAINCOLOR }}
        />
      </Box>
      <h5>
        Price: ${value[0]} --- ${value[1]}
      </h5>
    </Box>
  );
}
