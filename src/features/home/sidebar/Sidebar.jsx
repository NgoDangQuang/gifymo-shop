import { Box } from '@mui/material';
import SectionFive from './SectionFive';
import SectionFour from './SectionFour';
import SectionOne from './SectionOne';
import SectionThree from './SectionThree';
import SectionTwo from './SectionTwo';

const marginBottom = 5

export function Sidebar(props) {
    const { typeOfProduct } = props
    return (
        <Box>
            <Box mb={marginBottom}>
                <SectionOne typeOfProduct={typeOfProduct} />
            </Box>
            <Box mb={marginBottom}>
                <SectionTwo />
            </Box>
            <Box mb={marginBottom}>
                <SectionThree />
            </Box>
            <Box mb={marginBottom}>
                <SectionFour />
            </Box>
            <Box mb={marginBottom}>
                <SectionFive />
            </Box>
        </Box>
    );
}
