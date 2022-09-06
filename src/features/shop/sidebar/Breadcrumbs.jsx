import { Box } from '@mui/material';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import './styles.css';

export default function BasicBreadcrumbs() {
  return (
    <Box mt={2}>
      <Breadcrumbs aria-label="breadcrumb" className="breadcrums">
        <Link to="/gifymo-shop">Gifymo</Link>
        <Typography color="text.primary">Products</Typography>
      </Breadcrumbs>
    </Box>
  );
}
