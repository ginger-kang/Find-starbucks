import React from 'react';
import './App.scss';
import CafeMap from './components/CafeMap';
import CafeBrand from './components/CafeBrand';
import SearchPlace from './components/SearchPlace';
import CafeTitle from './components/CafeTitle';

function App() {
  return (
    <>
      <CafeTitle />
      <div className='main__view'>
        <SearchPlace />
        <CafeMap />
      </div>
    </>
  );
}

export default App;
