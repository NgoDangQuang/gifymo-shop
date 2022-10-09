import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './styles.css';
import Loading from 'component/Loading';

function SectionOne(props) {
  const { categories } = useSelector((state) => state.getData);

  return (
    <Box className="sectionOne__Layout">
      {!categories && <Loading />}
      {categories?.map((item) => (
        <div className="sectionOne__Item style__general" key={item.id}>
          <Link to="/gifymo-shop/shop">{item.name}</Link>
        </div>
      ))}
    </Box>
  );
}

export default SectionOne;
