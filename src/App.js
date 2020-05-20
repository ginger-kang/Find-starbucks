import React from 'react';
import './App.scss';
import MapContainer from './components/MapContainer';
import CafeBrand from './components/CafeBrand';
import SearchPlace from './components/SearchPlace';
import Nav from './components/Nav';

function App() {
  return (
    <>
      <Nav />
      <div className='main__view'>
        <SearchPlace />
        <CafeBrand />
        <MapContainer />
      </div>
    </>
  );
}

export default App;
