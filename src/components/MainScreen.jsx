import React from 'react';
import Routers from '../routers/Routers';
import Footer from './Footer';
import Header from './Header/Header';

const MainScreen = () => {
  return (
    <>
    <div className='container'>
      <Header/>
      <div>
        <Routers/>
      </div>
      <Footer/>
    </div>
    </>
  );
}

export default MainScreen;