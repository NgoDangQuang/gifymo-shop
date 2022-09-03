import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import './styles.css';

function SectionFour(props) {

    return (
        <Box className='sectionFour__layout'>
            <Box className='sectionFour__item'>
                <div className='a'>
                    <div className='title'>
                        <h4>Articles</h4>
                    </div>
                </div>
            </Box>
            <Box className='sectionFour__item'>
                <div className='blog'>
                    <Link to='/blogs'>
                        <h3>Promotional Advertising Specialty You Ve Waited Long Enough</h3>
                    </Link>
                    <div className='flex j-center'>
                        <div className='info flex j-between'>
                            <h3>By: &nbsp;</h3>
                            <h2>admin  &nbsp; &nbsp;</h2>
                        </div>
                        <div className='info flex j-between'>
                            <h3>Post on: &nbsp;</h3>
                            <h2>May 7, 2021</h2>
                        </div>
                    </div>
                </div>
            </Box>

            <Box className='sectionFour__item'>
                <div className='blog'>
                    <Link to='/blogs'>
                        <h3>What Is The Big R For Marketing Your Business</h3>
                    </Link>
                    <div className='flex j-center'>
                        <div className='info flex j-between'>
                            <h3>By: &nbsp;</h3>
                            <h2>admin &nbsp; &nbsp;</h2>
                        </div>
                        <div className='info flex j-between'>
                            <h3>Post on: &nbsp;</h3>
                            <h2>May 7, 2021</h2>
                        </div>
                    </div>
                </div>
            </Box>

            <Box className='sectionFour__item'>
                <Link to='/shop' className='sectionFour__viewmore'>
                    <div className='sectionFour__btn'>VIEW MORE ARTICLES</div>
                </Link>
            </Box>

        </Box>
    );
}

export default SectionFour;