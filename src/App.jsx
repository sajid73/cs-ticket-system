import React from 'react';
import Navbar from './components/Navbar';
import Banner from './components/banner/Banner';

const App = () => {
  return (
    <div className="w-[1200px] mx-auto">
      <Navbar />
      <Banner />
      
    </div>
  );
};

export default App;