import React from 'react';
import Header from './components/Header.jsx';
import Teams from './pages/Teams.jsx';
import Events from './pages/EventsPage.jsx';
import MoneyAnimation from './components/MoneyAnimation.jsx';
import SlickSlider from './components/SlickSlider.jsx';

function App() {
  return (
    <>
      <Header />  
      <MoneyAnimation />
      <SlickSlider />
      <Events />
      <Teams />
    </>
  );
}

export default App;

