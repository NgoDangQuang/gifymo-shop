import { Box } from '@mui/material';
import { ContactLogo, Content, Footer, Header, Navigation } from 'component/Common';

export function MainPage(props) {
  return (
    <Box>
      <Box>
        <Header />
      </Box>
      <Box>
        <ContactLogo />
      </Box>
      <Box>
        <Navigation />
      </Box>
      <Box>
        <Content />
      </Box>
      <Box>
        <Footer />
      </Box>
    </Box>
  );
}
