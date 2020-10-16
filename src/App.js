import React from 'react';
import Navigation from './components/Navigation/Navigation';
import News from './components/News/News';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="container mx-auto">
      <Navigation />
      <News />
      <Footer />
    </div>
  );
}

export default App;
