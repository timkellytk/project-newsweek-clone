import React from 'react';
import Navigation from './components/Navigation/Navigation';
import News from './components/News/News';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="bg-gray-200">
      <div className="container lg:mx-auto bg-white">
        <Navigation />
        <News />
        <Footer />
      </div>
    </div>
  );
}

export default App;
