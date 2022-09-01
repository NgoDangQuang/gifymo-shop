import { Route, Routes } from 'react-router-dom';
import { AboutUs, MainPage } from './component/Layout';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/about-us' element={<AboutUs />} />
      </Routes>
    </>
  );
}

export default App;
