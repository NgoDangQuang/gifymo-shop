import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import gift from './../../../asset/icons/gift2.gif';
import confetti from './../../../asset/icons/confetti2.gif';
import stars from './../../../asset/icons/stars2.gif';
import './styles.css';

function SectionTwo(props) {

    return (
        <Box className='sectionTwo__Layout'>
            <Box className='style__general sectionTwo__Item'>
                <Link to='/gifymo-shop/shop'>
                    <div className='sectionTwo__Item__Content'>
                        <img src={gift} alt="gift" />
                        <h3>Delivering quality gifts</h3>
                        <p>Information on its origins</p>
                    </div>
                </Link>
            </Box>

            <Box className='style__general sectionTwo__Item'>
                <Link to='/gifymo-shop/shop'>
                    <div className='sectionTwo__Item__Content'>
                        <img src={stars} alt="stars" />
                        <h3>Gifts for all occasions</h3>
                        <p>Variants and technical</p>
                    </div>
                </Link>
            </Box>

            <Box className='style__general sectionTwo__Item'>
                <Link to='/gifymo-shop/shop'>
                    <div className='sectionTwo__Item__Content'>
                        <img src={confetti} alt="confetti" />
                        <h3>Great customer service</h3>
                        <p>Random lipsum generator</p>
                    </div>
                </Link>
            </Box>
        </Box>
    );
}

export default SectionTwo;