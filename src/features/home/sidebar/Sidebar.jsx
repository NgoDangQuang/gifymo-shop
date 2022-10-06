import { Box } from '@mui/material';
import { GAP } from 'constants/styles';
import SectionFive from './SectionFive';
import SectionFour from './SectionFour';
import SectionOne from './SectionOne';
import SectionThree from './SectionThree';
import SectionTwo from './SectionTwo';


export function Sidebar(props) {
    return (
        <Box>
            <Box mb={GAP}>
                <SectionOne/>
            </Box>
            <Box mb={GAP}>
                <SectionTwo />
            </Box>
            <Box mb={GAP}>
                <SectionThree />
            </Box>
            <Box mb={GAP}>
                <SectionFour />
            </Box>
            <Box mb={GAP}>
                <SectionFive />
            </Box>
        </Box>
    );
}
