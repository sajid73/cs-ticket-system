import React from 'react';
import Navbar from './components/Navbar';
import Banner from './components/banner/Banner';
import Footer from './components/Footer';
import CustomerTickets from './components/customerTickets/CustomerTickets';

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-gray-100 min-h-screen pt-4">
        <Banner />
        <CustomerTickets />
      </div>
      <Footer />
    </div>
  );
};

export default App;