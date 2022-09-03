import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import { Box } from '@mui/material';
import { MAINCOLOR } from 'constants/styles';
import './styles.css';

function SectionFive(props) {

    return (
        <Box className='sectionFive__layout flex j-center'>
            <div className='sectionFive__item'>
                <div className='avt flex j-center'>
                    <div className='user'>
                        <img src="http://demo2.themelexus.com/gifymo/wp-content/uploads/2021/05/avatar.jpg" alt="avt" />
                        <div className='qoute'>
                            <FormatQuoteIcon fontSize='large' sx={{ color: MAINCOLOR }} />
                        </div>
                    </div>
                </div>
                <h2>"Love my basket! It's going to make a wonderful gift!"</h2>
                <p>Black Pink</p>
            </div>
        </Box>
    );
}

export default SectionFive;