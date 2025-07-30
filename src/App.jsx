import React from 'react';
import Header from './components/Header';
import Teams from './pages/Teams';
import Events from './pages/EventsPage.jsx'

function App() {
  return (
    <>
      <Events />
      <Header />
      <Teams />
    </>
  );
}

export default App;
