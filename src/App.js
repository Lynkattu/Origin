import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
//components from project
import Home from './components/Home'
import NotFound from './components/NotFound';
import World from './components/World';
import Items from './components/Items'
import Origins from './components/Origins';
import Artist from './components/Artist';
import Believer from './components/Believer';
import Criminal from './components/Criminal';
import Occultist from './components/Occultist';
import Primitive from './components/Primitive';
import Scholar from './components/Scholar';
import AlQasehran from './components/AlQasehran';
import Andiheimr from './components/Andiheimr';
import Charmire from './components/Charmire';
import Levausar from './components/Levausar';
import Pletver from './components/Pletver';
import Rhaenus from './components/Rhaenus';
import Characters from './components/Characters';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav className='topNavBar'>
          <Link className='topNavBar-link' to="/">Home</Link>{' '}
          <Link className='topNavBar-link' to="/World">World</Link>{' '}
          <Link className='topNavBar-link' to="/Origins">Origins</Link>{' '}
          <Link className='topNavBar-link' to="/Items">Items</Link>{' '}
          <Link className='topNavBar-link' to="/Characters">Characters</Link>{' '}

        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/World" element={<World />} />
          <Route path="/Origins" element={<Origins />} />
          <Route path="/Items" element={<Items />} />
          <Route path="/Characters" element={<Characters />} />
          <Route path="*" element={<NotFound/>} />
          <Route path="/Origins/Artist" element={<Artist />} />
          <Route path="/Origins/Believer" element={<Believer />} />
          <Route path="/Origins/Criminal" element={<Criminal />} />
          <Route path="/Origins/Occultist" element={<Occultist />} />
          <Route path="/Origins/Primitive" element={<Primitive />} />
          <Route path="/Origins/Scholar" element={<Scholar />} />
          <Route path="/World/Al-Qasehran" element={<AlQasehran />} />
          <Route path="/World/Andiheimr" element={<Andiheimr />} />
          <Route path="/World/Charmire" element={<Charmire />} />
          <Route path="/World/Levausar" element={<Levausar />} />
          <Route path="/World/Pletver" element={<Pletver />} />
          <Route path="/World/Rhaenus" element={<Rhaenus />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
