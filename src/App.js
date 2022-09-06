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
          <Route path='/gifymo-shop' element={<Home />} />
          <Route path='/gifymo-shop/shop' element={<Shop />} />
          <Route path='/gifymo-shop/our-team' element={<OurTeam />} />
          <Route path='/gifymo-shop/our-story' element={<OurStory />} />
          <Route path='/gifymo-shop/blogs' element={<Blogs />} />
          <Route path='/gifymo-shop/contact' element={<Contact />} />
          <Route path='/gifymo-shop/about-us' element={<AboutUs />} />
          <Route path='/gifymo-shop/track-orders' element={<TrackOrders />} />
          <Route path='/gifymo-shop/faq' element={<Faq />} />
        </Routes>
        <Box>
          <Footer />
        </Box>
      </Box>
    </>
  );
}

export default App;