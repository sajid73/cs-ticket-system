import React from 'react';
import Navbar from './components/Navbar';
import Banner from './components/banner/Banner';
import Footer from './components/Footer';
import CustomerTickets from './components/customerTickets/CustomerTickets';
import Dashboard from './components/Dashboard';

const App = () => {
  return (
    <div>
      <Navbar />
      <Dashboard />
      <Footer />
    </div>
  );
};

export default App;