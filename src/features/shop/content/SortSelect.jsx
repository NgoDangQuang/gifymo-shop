import { SearchOutlined } from '@mui/icons-material';
import GridViewSharpIcon from '@mui/icons-material/GridViewSharp';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import ViewListIcon from '@mui/icons-material/ViewList';
import { Box, TextField } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { useDispatch, useSelector } from 'react-redux';
import { setLayoutShowItems, setPriceRange, setTypeCategory } from 'redux/getData';
import './styles.css';

export default function SortSelect({ sort, setSort, data, setValueInput, valueInput }) {
  const dispatch = useDispatch();
  const { setPrice, minPriceDefault, maxPriceDefault, typeCategory, layoutShowItems } = useSelector(
    (state) => state.getData
  );

  const handleChange = (event) => {
    setSort(event.target.value);
  };
  const DeleteTypeProduct = () => {
    dispatch(setTypeCategory(''));
  };
  const DeleteFilterPrice = () => {
    dispatch(setPriceRange([minPriceDefault, maxPriceDefault]));
  };

  const handleChangeInput = (e) => {
    setValueInput(e.target.value);
  };

  const handleDeleteSearch = () => {
    setValueInput('');
  };

  return (
    <Box className="layout-sort-header flex j-between">
      <Box sx={{ display: 'flex', alignItems: 'flex-end', marginRight: '20px' }}>
        <SearchOutlined />
        <TextField
          placeholder="search"
          variant="standard"
          sx={{ width: '220px' }}
          value={valueInput}
          onChange={handleChangeInput}
        />
        {valueInput && <HighlightOffIcon onClick={handleDeleteSearch} className="icon-delete" />}
      </Box>
      <div className="layout-filter flex">
        {(setPrice[0] !== minPriceDefault || setPrice[1] !== maxPriceDefault) && (
          <div className="filter-item">
            <h4>
              ${setPrice[0]} --- ${setPrice[1]}
            </h4>
            <HighlightOffIcon onClick={DeleteFilterPrice} className="icon-delete" />
          </div>
        )}
        {typeCategory !== '' && (
          <div className="filter-item">
            <h4>{typeCategory}</h4>
            <HighlightOffIcon onClick={DeleteTypeProduct} className="icon-delete" />
          </div>
        )}
      </div>

      <div className="layout-groups-sort">
        <GridViewSharpIcon
          sx={{ fontSize: '30px', cursor: 'pointer' }}
          className={(layoutShowItems === 1 && 'active-icon') || 'icon-disabled'}
          onClick={() => dispatch(setLayoutShowItems(1))}
        />
        <ViewListIcon
          sx={{ fontSize: '38px', margin: '0px 10px', cursor: 'pointer' }}
          className={(layoutShowItems === 2 && 'active-icon') || 'icon-disabled'}
          onClick={() => dispatch(setLayoutShowItems(2))}
        />

        <FormControl sx={{ m: 1, minWidth: 200 }} size="small">
          <InputLabel id="sort">Sort</InputLabel>
          <Select labelId="sort" id="sort" value={sort} label="Sort" onChange={handleChange}>
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={'SortByPriceLowToHigh'}>Sort by Price: low to high</MenuItem>
            <MenuItem value={'SortByPriceHighToLow'}>Sort by Price: high to low</MenuItem>
            <MenuItem value={'SortByNameAZ'}>Sort by Name: A -&gt; Z</MenuItem>
            <MenuItem value={'SortByNameZA'}>Sort by Name: Z -&gt; A</MenuItem>
            <MenuItem value={'SortByStar'}>Sort by Star</MenuItem>
          </Select>
        </FormControl>
      </div>
    </Box>
  );
}
