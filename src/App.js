import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import List from './pages/hotelList/List';
import Single from './pages/singleHotel/Single';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/hotels" element={<List/>} />
        <Route path="/hotels/:id" element={<Single/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
