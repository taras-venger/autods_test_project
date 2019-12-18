import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import UntrackedCSV from './components/UntrackedCSV';
import Item from './components/Item';

function App() {
  return (
    <div className='App'>
      <Header />
      <UntrackedCSV />
      <Footer />
    </div>
  );
}

export default App;
