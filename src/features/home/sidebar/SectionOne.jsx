import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import './styles.css';

function SectionOne(props) {
    const {typeOfProduct} =props;

    return (
        <Box className='sectionOne__Layout'>
            {typeOfProduct.map((item)=>(
                <div className='sectionOne__Item style__general' >
                    <Link to='/shop'>{item}</Link>
                </div>
            ))}
        </Box>
    );
}

export default SectionOne;