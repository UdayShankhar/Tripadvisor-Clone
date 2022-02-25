import React from 'react';
import './App.css';
import Header from './Header';
import SecondHeader from './SecondHeader';
import Body from './Body';
import Cards from './Cards';
import MainContent from './MainContent';
import Footer from './Footer';

function App() {
  return (
    <div className='parent'>
     <Header/>
     <SecondHeader/>
     <Body/>
     <Cards />
     <MainContent/>
     <Footer/>
    </div>
  );
}

export default App;
