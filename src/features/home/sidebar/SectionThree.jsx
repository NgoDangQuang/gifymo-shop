import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import './styles.css';

function SectionThree(props) {

    return (
        <Box className='sectionThree__layout'>
            <div className='sectionThree__item'>
                <h4>Top Holiday</h4>
                <h5>GIFT IDEAS</h5>
                <div className='sectionThree__image'>
                    <img src="http://demo2.themelexus.com/gifymo/wp-content/uploads/2021/05/h1-banner5.jpg" alt="thumnails" />
                </div>
                <Link to='/shop' className='sectionThree__shopnow'>
                    <div className='sectionThree__btn'>SHOP NOW</div>
                </Link>
            </div>
        </Box>
    );
}

export default SectionThree;