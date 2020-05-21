import React from 'react';
import './App.scss';
import SearchPlace from './components/SearchPlace';
import CafeTitle from './components/CafeTitle';

function App() {
  return (
    <>
      <CafeTitle />
      <div className='main__view'>
        <SearchPlace />
      </div>
    </>
  );
}

export default App;
