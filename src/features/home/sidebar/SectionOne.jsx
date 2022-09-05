import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import './styles.css';

function SectionOne(props) {
    const {typeOfProduct} =props;

    return (
        <Box className='sectionOne__Layout'>
            {typeOfProduct.map((item, idx)=>(
                <div className='sectionOne__Item style__general' key={idx}>
                    <Link to='/shop'>{item}</Link>
                </div>
            ))}
        </Box>
    );
}

export default SectionOne;