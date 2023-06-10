
import React from 'react';
import { About, Home, Navbar, Resume, Projects } from './Components';

const App = () => {
  return (
    <div className="App">

      <div className='gradient__bg'>
        
          <Navbar />
          <Home />
          <About /> 
          <Projects />
          <Resume />
        
      </div>
    </div>
  );
}

export default App;
