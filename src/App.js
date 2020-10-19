import React from 'react';
import Navigation from './components/Navigation/Navigation';
import News from './components/News/News';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="xl:bg-gray-200">
      <div className="xl:container mx-auto bg-white">
        <Navigation />
        <News />
        <Footer />
      </div>
    </div>
  );
}

export default App;
