import { Box } from '@mui/material';
import { AboutUs, Blogs, Contact, Faq, Home, OurStory, OurTeam, Shop, TrackOrders } from 'features';
import { ContactLogo, Footer, Header, Navigation, ScrollToTop } from 'Layout';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Box>
        <ScrollToTop />
        <Box>
          <Header />
        </Box>
        <Box>
          <ContactLogo />
        </Box>
        <Box>
          <Navigation />
        </Box>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/our-team' element={<OurTeam />} />
          <Route path='/our-story' element={<OurStory />} />
          <Route path='/blogs' element={<Blogs />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about-us' element={<AboutUs />} />
          <Route path='/track-orders' element={<TrackOrders />} />
          <Route path='/faq' element={<Faq />} />
        </Routes>
        <Box>
          <Footer />
        </Box>
      </Box>
    </>
  );
}

export default App;
