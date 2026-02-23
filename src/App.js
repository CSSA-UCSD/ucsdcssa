import React from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import Navbar from './components/components/Navbar';
import Main from './components/Main';
import Footer from './components/components/Footer';


function App() {
  return (
    <div className="App">
     <Navbar />
     <Main />
    <Footer />
    
    </div>
  );
}

export default App;
