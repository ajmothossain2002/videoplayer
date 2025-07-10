import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../page/Home';
 import Explore from '../page/Explore';
import VideoDetails from '../page/VideoDetails';

import Topbar from '../component/Topbar';









function Rout() {
  return (
    <Router>
      <Topbar/>
      
      <Routes >
        <Route path="/" element={<Explore />} />
        <Route path="/home" element={<Home />} />
        <Route path="/video/:id" element={<VideoDetails />} />
        
    



      </Routes>
    </Router>
  );
}

export default Rout;
