import GridViewSharpIcon from '@mui/icons-material/GridViewSharp';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import ViewListIcon from '@mui/icons-material/ViewList';
import { Box } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import './styles.css';

export default function SortSelect({
  setSortItems,
  sortItems,
  length,
  typeProduct,
  setTypeProduct,
  filterMinPrice,
  setFilterMinPrice,
  filterMaxPrice,
  setFilterMaxPrice,
  minPrice,
  maxPrice,
  setLayoutShowItems,
  layoutShowItems,
}) {
  const handleChange = (event) => {
    setSortItems(event.target.value);
  };
  const DeleteTypeProduct = () => {
    setTypeProduct('');
  };
  const DeleteFilterPrice = () => {
    setFilterMinPrice(minPrice);
    setFilterMaxPrice(maxPrice);
  };
  return (
    <Box className="layout-sort-header flex j-between">
      <div className="layout-filter flex">
        <h4>Found {length} result</h4>
        {(filterMinPrice !== minPrice || filterMaxPrice !== maxPrice) && (
          <div className="filter-item">
            <h4>
              ${filterMinPrice} --- ${filterMaxPrice}
            </h4>
            <HighlightOffIcon onClick={DeleteFilterPrice} className="icon-delete" />
          </div>
        )}
        {typeProduct && (
          <div className="filter-item">
            <h4>{typeProduct}</h4>
            <HighlightOffIcon onClick={DeleteTypeProduct} className="icon-delete" />
          </div>
        )}
      </div>
      <div className="layout-groups-sort">
        <GridViewSharpIcon
          sx={{ fontSize: '30px', cursor: 'pointer' }}
          className={(layoutShowItems === 1 && 'active-icon') || 'icon-disabled'}
          onClick={() => setLayoutShowItems(1)}
        />
        <ViewListIcon
          sx={{ fontSize: '38px', margin: '0px 10px', cursor: 'pointer' }}
          className={(layoutShowItems === 2 && 'active-icon') || 'icon-disabled'}
          onClick={() => setLayoutShowItems(2)}
        />

        <FormControl sx={{ m: 1, minWidth: 200 }} size="small">
          <InputLabel id="sort">Sort</InputLabel>
          <Select labelId="sort" id="sort" value={sortItems} label="Sort" onChange={handleChange}>
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
