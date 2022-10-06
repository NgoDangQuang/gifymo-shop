import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { MAINCOLOR } from 'constants/styles';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPriceDefault, setPriceRange } from 'redux/getData';
import { MinMaxPrice } from 'utils/HandlePrice';
import './styles.css';

export default function FilterByPrice(props) {
  const { products, setPrice, minPriceDefault, maxPriceDefault } = useSelector(
    (state) => state.getData
  );
  const dispatch = useDispatch();
  useEffect(() => {
    const [minPrice, maxPrice] = MinMaxPrice(products);
    dispatch(setPriceRange([minPrice, maxPrice]));
    dispatch(setPriceDefault([minPrice, maxPrice]));
  }, [dispatch, products]);

  const [minPrice, maxPrice] = setPrice;

  const handleChange = (event, newValue) => {
    dispatch(setPriceRange([newValue[0], newValue[1]]));
  };
  return (
    <Box className="filterPrice">
      <h2>Filter by Price</h2>
      <Box sx={{ width: '100%' }}>
        <Slider
          getAriaLabel={() => 'Temperature range'}
          value={[minPrice, maxPrice]}
          onChange={handleChange}
          valueLabelDisplay="auto"
          min={minPriceDefault}
          max={maxPriceDefault}
          sx={{ color: MAINCOLOR }}
        />
      </Box>
      <h5>
        Price: ${minPrice} --- ${maxPrice}
      </h5>
    </Box>
  );
}
